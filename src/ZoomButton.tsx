import { useTrackedStore } from "./store";

export default function ZoomButton() {
  const { isZoomed, setZoomed } = useTrackedStore();

  return (
    <div
      style={{
        position: "absolute",
        bottom: 10,
        left: "48%",
        transform: isZoomed ? "" : "translateY(50px)",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <button
        onClick={() => setZoomed(false)}
        style={{
          backgroundColor: "transparent",
          borderRadius: "5px",
          transform: " scale(1.5)",
          cursor: "pointer",
        }}
      >
        OverView
      </button>
    </div>
  );
}
