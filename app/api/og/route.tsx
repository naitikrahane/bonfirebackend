import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get the regret text, limit length to prevent layout breaking
    const rawRegret = searchParams.get('regret') || 'Protocol 2025';
    const regret = rawRegret.length > 50 ? rawRegret.slice(0, 50) + '...' : rawRegret;
    
    // Get optional wallet address
    const rawAddr = searchParams.get('addr') || '0x...ANON';
    const addr = rawAddr.length > 12 ? rawAddr.slice(0, 6) + '...' + rawAddr.slice(-4) : rawAddr;

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
            backgroundColor: '#000000',
            position: 'relative',
          }}
        >
          {/* Top Gold/Orange Bar */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '25px',
              backgroundImage: 'linear-gradient(90deg, #ff4500, #ffae00, #ff4500)',
            }}
          />

          {/* Main Content Container */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            
            {/* Header */}
            <span
              style={{
                color: '#ff4500',
                fontSize: 60,
                fontFamily: 'Courier New',
                fontWeight: 900,
                letterSpacing: '-2px',
                marginBottom: '10px',
              }}
            >
              PROOF OF CATHARSIS
            </span>
            
            <span
              style={{
                color: '#666666',
                fontSize: 28,
                fontFamily: 'Courier New',
                letterSpacing: '2px',
                marginBottom: '60px',
              }}
            >
              RECORDED ON BASE BLOCKCHAIN
            </span>

            {/* The Regret Text */}
            <div style={{ display: 'flex', padding: '0 80px', justifyContent: 'center' }}>
              <span
                style={{
                  color: '#ffffff',
                  fontSize: 75,
                  fontFamily: 'Times New Roman',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  lineHeight: 1.1,
                  textShadow: '0 0 20px rgba(255, 60, 0, 0.3)',
                }}
              >
                "{regret}"
              </span>
            </div>
          </div>

          {/* Footer Metadata */}
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              left: 50,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span style={{ color: '#666666', fontSize: 22, fontFamily: 'Courier New' }}>
              DATE: {new Date().toLocaleDateString()}
            </span>
            <span style={{ color: '#666666', fontSize: 22, fontFamily: 'Courier New' }}>
              BURNED BY: {addr}
            </span>
          </div>

          {/* Footer Brand */}
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              right: 50,
              color: '#ff4500',
              fontSize: 24,
              fontFamily: 'Courier New',
              fontWeight: 'bold',
            }}
          >
            THE DIGITAL BONFIRE
          </div>

          {/* Bottom Gold/Orange Bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '25px',
              backgroundImage: 'linear-gradient(90deg, #ff4500, #ffae00, #ff4500)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
