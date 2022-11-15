import { useTrackedStore } from "@/store";
import { useBounds } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { hasChinese } from "scripts/regexp";

export default function SelectZoom({ children }) {
  const { isZoomed, setZoomed } = useTrackedStore();
  const api = useBounds();
  const { scene } = useThree();
  // useEffect(() => {
  //   const floor = scene.getObjectByName("FocusPlane");
  //   if (!isZoomed) {
  //     api.refresh(floor).fit();
  //   }
  // }, [isZoomed]);

  return (
    <group
      onClick={(e) => {
        e.stopPropagation();
        // console.log(e.object.name)
        e.delta <= 2 &&
          e.object.name &&
          hasChinese(e.object.name) &&
          api.refresh(e.object).fit() &&
          setZoomed(true);
      }}
      onPointerMissed={(e) => {
        setZoomed(false);
      }}
    >
      {children}
    </group>
  );
}
