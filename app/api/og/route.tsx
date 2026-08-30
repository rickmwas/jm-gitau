import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'J.M. Gitau 2027';
    const subtitle =
      searchParams.get('subtitle') ||
      'Candidate for Naivasha Constituency Member of Parliament';
    const category = searchParams.get('category') || 'DCP — Skiza Wakenya';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            backgroundColor: '#0F172A',
            backgroundImage:
              'radial-gradient(circle at 100% 0%, rgba(0, 200, 83, 0.25) 0%, transparent 60%), radial-gradient(circle at 0% 100%, rgba(139, 69, 19, 0.3) 0%, transparent 60%)',
            padding: '60px 70px',
            fontFamily: 'sans-serif',
            color: '#FFFFFF',
            boxSizing: 'border-box',
          }}
        >
          {/* Top Brand Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 200, 83, 0.15)',
                border: '1.5px solid #00C853',
                borderRadius: '50px',
                padding: '10px 24px',
                color: '#00E676',
                fontSize: 20,
                fontWeight: 800,
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              {category}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#94A3B8',
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              jmgitau2027.co.ke
            </div>
          </div>

          {/* Main Title & Subtitle Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '1000px',
            }}
          >
            <div
              style={{
                fontSize: 56,
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#F8FAFC',
                letterSpacing: '-1px',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 500,
                color: '#CBD5E1',
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </div>
          </div>

          {/* Bottom Footer Accent */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              paddingTop: '30px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: '#00C853',
                  boxShadow: '0 0 12px #00C853',
                }}
              />
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '0.5px',
                }}
              >
                J.M. GITAU
              </span>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: '#00E676',
                }}
              >
                • NAIVASHA 2027
              </span>
            </div>

            <div
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: '#F59E0B',
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                padding: '6px 18px',
                borderRadius: '8px',
                border: '1px solid rgba(245, 158, 11, 0.3)',
              }}
            >
              Democracy for the Citizens Party
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : 'Unknown error';
    return new Response(`Failed to generate the OG image: ${errorMessage}`, {
      status: 500,
    });
  }
}
