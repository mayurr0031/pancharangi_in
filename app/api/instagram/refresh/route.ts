import { NextResponse } from 'next/server'

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  if (!token) {
    return NextResponse.json({ error: 'INSTAGRAM_ACCESS_TOKEN not configured' }, { status: 500 })
  }

  try {
    // Refresh a long-lived Instagram Graph API token
    const res = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(token)}`,
    )
    const data = await res.json()
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to refresh token', details: data }, { status: res.status })
    }

    // data contains a new access_token and expires_in
    return NextResponse.json({ message: 'Token refreshed', data })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 })
  }
}
