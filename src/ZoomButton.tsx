import { useTrackedStore } from "./store";

export default function ZoomButton() {
  const { isZoomed, setZoomed } = useTrackedStore();

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        bottom: '5vh',
        transform: isZoomed ? "" : "translate(0,10vh)",
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
          border:'1px solid'
        }}
      >
        OverView
      </button>
    </div>
  );
}
