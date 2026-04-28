import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')

  if (!code) {
    return NextResponse.json({ error: 'Missing code in callback' }, { status: 400 })
  }

  const appId = process.env.INSTAGRAM_APP_ID
  const appSecret = process.env.INSTAGRAM_APP_SECRET
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/instagram/callback`

  if (!appId || !appSecret) {
    return NextResponse.json({ error: 'Missing INSTAGRAM_APP_ID or INSTAGRAM_APP_SECRET' }, { status: 500 })
  }

  try {
    // Exchange code for a short-lived user access token via Facebook OAuth
    const tokenRes = await fetch(
      `https://graph.facebook.com/v16.0/oauth/access_token?client_id=${appId}&redirect_uri=${encodeURIComponent(
        redirectUri,
      )}&client_secret=${appSecret}&code=${code}`,
    )

    const tokenData = await tokenRes.json()
    if (!tokenRes.ok) {
      return NextResponse.json({ error: 'Failed to exchange code', details: tokenData }, { status: 500 })
    }

    const shortLivedToken = tokenData.access_token

    // Exchange the short-lived token for a long-lived token
    const exchRes = await fetch(
      `https://graph.facebook.com/v16.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${shortLivedToken}`,
    )

    const exchData = await exchRes.json()
    if (!exchRes.ok) {
      return NextResponse.json({ error: 'Failed to obtain long-lived token', details: exchData }, { status: 500 })
    }

    const longLivedToken = exchData.access_token

    // NOTE: For security, we do not persist tokens on the server in this sample.
    // In production, store `longLivedToken` securely (e.g., in a database or secrets store)
    // and set INSTAGRAM_IG_USER_ID in environment or in your persistent store.

    return NextResponse.json({
      message: 'Successfully obtained long-lived token. Store this token as INSTAGRAM_ACCESS_TOKEN in environment or secrets.',
      longLivedToken,
      raw: { shortLived: tokenData, longLived: exchData },
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 })
  }
}
