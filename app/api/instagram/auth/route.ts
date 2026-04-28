import { NextResponse } from 'next/server'

export function GET() {
  const appId = process.env.INSTAGRAM_APP_ID
  const redirectUri =
    process.env.INSTAGRAM_REDIRECT_URI || `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/instagram/callback`

  if (!appId) {
    return NextResponse.json({ error: 'Missing INSTAGRAM_APP_ID in environment' }, { status: 500 })
  }

  const scope = ['instagram_basic', 'pages_show_list'].join(',')
  const oauthUrl = `https://www.facebook.com/v16.0/dialog/oauth?client_id=${appId}&redirect_uri=${encodeURIComponent(
    redirectUri,
  )}&scope=${encodeURIComponent(scope)}`

  return NextResponse.redirect(oauthUrl)
}
