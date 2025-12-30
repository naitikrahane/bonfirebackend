import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const text =
    searchParams.get("text") ||
    "A regret was burned into the digital bonfire";

  const addr =
    searchParams.get("addr") ||
    "0xANON";

  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#000000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          color: "#ffffff",
          border: "18px solid #ff4500",
          fontFamily: "serif"
        }}
      >
        {/* HEADER */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: 3,
              color: "#ff4500"
            }}
          >
            PROOF OF BURN
          </div>

          <div
            style={{
              marginTop: 12,
              fontSize: 26,
              color: "#999999",
              fontFamily: "monospace"
            }}
          >
            FARCASTER • BASE • ON-CHAIN
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 40px"
          }}
        >
          <div
            style={{
              fontSize: text.length > 60 ? 52 : 72,
              lineHeight: 1.25,
              wordBreak: "break-word"
            }}
          >
            “{text}”
          </div>
        </div>

        {/* FOOTER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "monospace",
            fontSize: 22,
            color: "#aaaaaa"
          }}
        >
          <div>
            BURNED BY: {addr.slice(0, 6)}...
            <br />
            DATE: {date}
          </div>

          <div
            style={{
              color: "#ff4500",
              fontWeight: 600,
              letterSpacing: 1
            }}
          >
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
