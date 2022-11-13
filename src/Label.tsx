import {
  Billboard,
  Html,
  PivotControls,
  TransformControls,
} from "@react-three/drei";
import { useRef } from "react";
import fontUrl from "/SourceHanSansCN-Regular.otf?url";

interface LabelProps {
  text?: string;
  show?: boolean;
  children?: any;
  position?: [number, number, number];
}

export default function Label({
  text = "text",
  position = [0, 0.5, 0],
}: LabelProps) {
  const ref = useRef<THREE.Group>(null);
  return (
    // <Billboard position={position}>
    //   <Text
    //     font={fontUrl}
    //     color="#1B2430"
    //     outlineColor={"#D6D5A8"}
    //     outlineWidth={0.005}
    //     anchorY={-0.3}
    //   >
    //     {text}
    //   </Text>
    // </Billboard>
      <Billboard position={position} ref={ref}>
        <Html center transform sprite>
          <div className="p-2 max-w-sm mx-auto bg-white rounded-xl shadow-xl flex items-center space-x-4 opacity-90">
            <span className="text-xl font-medium text-black select-none">
              {text}
            </span>
          </div>
        </Html>
      </Billboard>
  );
}
