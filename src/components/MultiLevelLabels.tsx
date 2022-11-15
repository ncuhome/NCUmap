import { useSpring } from "@react-spring/three";
import { useThree } from "@react-three/fiber";
import { useState, useCallback } from "react";
import Label from "./Label";

export default function MultiLevelLabels() {
  const [labelClass, setLabelClass] = useState(1);
  const camera = useThree().camera;
  const springs = useSpring({
    to: { position: [0, 0, 0] },
  });

  const handleXX = useCallback(() => {
    // 点击休闲区标签，切换到休闲区视角
    setLabelClass(2);
  }, [labelClass]);
  return (
    <>
      <Label
        text="修贤区"
        position={[-6.5, 1, -3]}
        onClick={handleXX}
        show={labelClass === 1}
      />
      <Label text="天健区" position={[3, 1, 1.5]} />
      <Label text="医学院" position={[12, 1, 4]} />
    </>
  );
}
