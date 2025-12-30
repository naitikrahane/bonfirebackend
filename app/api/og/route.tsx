import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text") || "No text provided";
  const addr = searchParams.get("addr") || "0xANON";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          border: "18px solid #ff4500",
          fontFamily: "serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: "bold",
              letterSpacing: 3,
              color: "#ff4500",
            }}
          >
            PROOF OF BURN
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 26,
              color: "#999",
              fontFamily: "monospace",
            }}
          >
            FARCASTER • BASE • ON-CHAIN
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 40px",
            fontSize: text.length > 60 ? 52 : 72,
            lineHeight: 1.25,
            wordBreak: "break-word",
          }}
        >
          “{text}”
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 22,
            color: "#aaa",
          }}
        >
          <div>
            BURNED BY: {addr.slice(0, 6)}...
            <br />
            DATE: {new Date().toLocaleDateString()}
          </div>

          <div
            style={{
              color: "#ff4500",
              fontWeight: "600",
              letterSpacing: 1,
            }}
          >
            THE DIGITAL BONFIRE
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
