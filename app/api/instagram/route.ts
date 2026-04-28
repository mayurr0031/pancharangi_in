import { NextResponse } from 'next/server'

// Server-side API route to fetch Instagram media using the Instagram Graph API.
// Requires these environment variables to be set (recommended as GitHub Secrets):
// - INSTAGRAM_IG_USER_ID
// - INSTAGRAM_ACCESS_TOKEN
// If not provided, the route returns 501 with a helpful message.

export async function GET() {
  const userId = process.env.INSTAGRAM_IG_USER_ID
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!userId || !accessToken) {
    return NextResponse.json(
      {
        error:
          'Instagram integration not configured. Set INSTAGRAM_IG_USER_ID and INSTAGRAM_ACCESS_TOKEN in environment.',
      },
      { status: 501 },
    )
  }

  try {
    const fields = ['id', 'caption', 'media_url', 'permalink', 'thumbnail_url', 'media_type'].join(',')
    const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${accessToken}`

    const res = await fetch(url)
    if (!res.ok) {
      const text = await res.text()
      return NextResponse.json({ error: 'Instagram API error', details: text }, { status: res.status })
    }

    const data = await res.json()

    // Normalize to a simpler shape and filter to images only
    const items = (data.data || [])
      .filter((m: any) => m.media_type === 'IMAGE' || m.media_type === 'CAROUSEL_ALBUM')
      .map((m: any) => ({
        id: m.id,
        image: m.media_url || m.thumbnail_url,
        caption: m.caption || '',
        permalink: m.permalink,
      }))

    return NextResponse.json({ items })
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 })
  }
}
