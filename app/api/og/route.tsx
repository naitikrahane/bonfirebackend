import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const text = searchParams.get("text") || "A regret was burned";
  const addr = searchParams.get("addr") || "0xANON";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          color: "white",
          border: "20px solid #ff4500",
          fontFamily: "serif"
        }}
      >
        {/* HEADER */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ff4500",
              letterSpacing: 2
            }}
          >
            PROOF OF CATHARSIS
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 26,
              color: "#999",
              fontFamily: "monospace"
            }}
          >
            RECORDED ON BASE BLOCKCHAIN
          </div>
        </div>

        {/* CENTER TEXT */}
        <div
          style={{
            fontSize: text.length > 40 ? 56 : 72,
            textAlign: "center",
            lineHeight: 1.2,
            padding: "0 40px"
          }}
        >
          “{text}”
        </div>

        {/* FOOTER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 22,
            color: "#aaa"
          }}
        >
          <div>
            BURNED BY: {addr.slice(0, 6)}...
            <br />
            DATE: {new Date().toLocaleDateString()}
          </div>

          <div style={{ color: "#ff4500" }}>
            THE DIGITAL BONFIRE
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
