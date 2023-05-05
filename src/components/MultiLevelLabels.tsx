import { useTrackedStore } from "@/store";
import { useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { useState, useLayoutEffect } from "react";
import * as THREE from "three";
import Label from "./Label";

export default function MultiLevelLabels() {
  const { labelClass, setLabelClass, lookAt, setLookAt, camPos } =
    useTrackedStore();
  const [animation, setAnimation] = useState(false);
  let lookAtPos = new THREE.Vector3();

  // const spring = useSpring(
  //   () => ({
  //     config: { precision: 0.0001 },
  //     position:[0,0,0],
  //     onChange: ({ value }) => {
  //       camera.position.set(value.position[0], value.position[1], value.position[2]);
  //     },
  //   }),
  //   [labelClass]
  // );

  useLayoutEffect(() => {
    setAnimation(true);
  }, [labelClass]);

  // useFrame((state) => {
  //   // console.log(state.camera.position);
  //   if (!animation) {
  //     state.clock.elapsedTime = 0;
  //     return;
  //   }

  //   const alpha = 0.1;
  //   state.camera.position.lerp(
  //     new THREE.Vector3(camPos.x, camPos.y, camPos.z),
  //     alpha
  //   );
  //   lookAtPos.lerp(new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z), alpha);
  //   state.camera.lookAt(
  //     new THREE.Vector3(lookAtPos.x, lookAtPos.y, lookAtPos.z)
  //   );
  //   state.camera.updateProjectionMatrix();
  //   if (state.clock.getElapsedTime() > 1.2) setAnimation(false);
  // });

  return labelClass === 1 ? (
    <>
      <Label
        text="修贤区"
        position={[-6.5, 1, -3]}
        onClick={() => {
          setLabelClass(2);
          setLookAt("XX");
        }}
      />
      <Label
        text="天健区"
        position={[3, 1, 1.5]}
        onClick={() => {
          setLabelClass(2);
          setLookAt("TJ");
        }}
      />
      <Label
        text="医学院"
        position={[12, 1, 4]}
        onClick={() => {
          setLabelClass(2);
          setLookAt("YXY");
        }}
      />
    </>
  ) : null;
}
