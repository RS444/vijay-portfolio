import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    
    const title = searchParams.has('title')
      ? searchParams.get('title')?.slice(0, 100)
      : 'Vijay R S — AI & Data Science Engineer'
      
    const description = searchParams.has('description')
      ? searchParams.get('description')?.slice(0, 150)
      : 'Crafting intelligent systems, predictive models, and full-stack solutions.'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0a0a0c',
            backgroundImage: 'radial-gradient(circle at 50% -20%, rgba(37, 99, 235, 0.4) 0%, #0a0a0c 70%)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 120px' }}>
            
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 32px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '999px',
                marginBottom: '40px',
              }}
            >
              <span style={{ color: '#d4d4d8', fontSize: 24, fontWeight: 500, letterSpacing: '0.05em' }}>
                VIJAY.DEV
              </span>
            </div>

            <h1
              style={{
                fontSize: 84,
                fontFamily: 'sans-serif',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1.1,
                textAlign: 'center',
                marginBottom: '32px',
                letterSpacing: '-0.04em',
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontSize: 36,
                fontFamily: 'sans-serif',
                color: '#a1a1aa',
                textAlign: 'center',
                maxWidth: '900px',
                lineHeight: 1.4,
              }}
            >
              {description}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
