import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RAPIC — Rent A Property In Capital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #022c22 0%, #064e3b 55%, #0a0f0d 100%)",
          color: "#faf7f1",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 50% at 85% 10%, rgba(212,175,55,0.22), transparent 60%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#faf7f1",
              color: "#064e3b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            R
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.5 }}>
              RAPIC
            </div>
            <div
              style={{
                fontSize: 14,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "rgba(250,247,241,0.65)",
                marginTop: 4,
              }}
            >
              Rent · Capital
            </div>
          </div>
        </div>

        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 16,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#e8c869",
              marginBottom: 18,
            }}
          >
            Islamabad · New Blue Area
          </div>
          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: -1.4,
              maxWidth: 980,
            }}
          >
            Find premium rentals in Islamabad.
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 30,
              color: "rgba(250,247,241,0.78)",
              maxWidth: 880,
            }}
          >
            Direct deals · Zero commission · Trusted listings.
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(250,247,241,0.65)",
          }}
        >
          <div>rapic.pk</div>
          <div style={{ color: "#e8c869" }}>· Islamabad&apos;s direct-deal rental platform</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
