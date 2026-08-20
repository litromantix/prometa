import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#14100d",
          backgroundImage:
            "linear-gradient(135deg, #14100d 0%, #1c1613 55%, #362b28 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c6a377",
            marginBottom: 28,
          }}
        >
          Architectural Facade Systems
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 132,
            fontWeight: 300,
            letterSpacing: 6,
            color: "#f6f4f1",
          }}
        >
          PROMETA
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            width: 120,
            height: 2,
            backgroundColor: "#b08b5c",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#b7ab9d",
            marginTop: 32,
          }}
        >
          Engineering Durability, Shaping Modern Skylines.
        </div>
      </div>
    ),
    { ...size }
  );
}
