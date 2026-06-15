import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#0B0B0B",
          borderLeft: "4px solid #CE1126",
          color: "#F8F7F2",
          display: "flex",
          fontSize: 15,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          width: "100%"
        }}
      >
        DT
      </div>
    ),
    size
  );
}
