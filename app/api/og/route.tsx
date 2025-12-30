import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get('regret') || 'Protocol 2025';

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
          backgroundColor: '#020202',
          border: '20px solid #ff3c00',
          fontFamily: 'serif',
        }}
      >
        <div style={{ color: '#ff3c00', fontSize: 60, marginBottom: 20, fontWeight: 900 }}>
          PROOF OF CATHARSIS
        </div>
        <div style={{ color: '#666', fontSize: 30, marginBottom: 60 }}>
          RECORDED ON BASE BLOCKCHAIN
        </div>
        <div
          style={{
            color: 'white',
            fontSize: 80,
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '0 40px',
            lineHeight: 1.1,
          }}
        >
          "{text}"
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            color: '#ff3c00',
            fontSize: 24,
          }}
        >
          THE DIGITAL BONFIRE
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
