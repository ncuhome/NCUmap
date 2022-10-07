import { useTrackedStore } from "./store";

export default function ZoomButton() {
  const { isZoomed, setZoomed } = useTrackedStore();
  const { isJoy, setJoy } = useTrackedStore();

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        bottom: "5vh",
        // transform: isZoomed ? "" : "translate(0,10vh)",
        transition: "all 0.5s ease-in-out",
      }}
    >
      {!isJoy && !isZoomed && <DefaultBtn onClick={()=>{setJoy(true)}} text='play'/>}
    </div>
  );
}


const DefaultBtn = ({onClick,text}:any) => {

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "transparent",
        borderRadius: "5px",
        transform: " scale(1.5)",
        cursor: "pointer",
        border: "1px solid",
      }}
    >
      {text}
    </button>
  );
};
