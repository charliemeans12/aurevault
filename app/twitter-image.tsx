import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Aurevault Precious Metals Pty LTD - Premium Gold & Diamond Storage"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom, #ffffff, #f3f4f6)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        {/* Use a placeholder for the logo */}
        <div
          style={{
            width: 300,
            height: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(to right, #f59e0b, #fbbf24)",
            borderRadius: 12,
            color: "white",
            fontWeight: "bold",
            fontSize: 36,
          }}
        >
          AUREVAULT
        </div>
      </div>
      <div
        style={{
          fontSize: 64,
          fontWeight: "bold",
          color: "#f59e0b",
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        Premium Gold & Diamond Storage
      </div>
      <div
        style={{
          fontSize: 36,
          color: "#666",
          marginTop: 24,
          textAlign: "center",
        }}
      >
        Securing precious assets with cutting-edge technology since 1995
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
