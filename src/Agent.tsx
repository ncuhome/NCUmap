import {
  Billboard,
  Box,
  Html,
  PerspectiveCamera,
  Plane,
  RoundedBox,
  Sphere,
  Text,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { DoubleSide, Mesh } from "three";
import * as THREE from "three";
import Joystick from "./Joystick";
import { useTrackedStore } from "./store";
import { RigidBody } from "@react-three/rapier";
import Label from "./Label";
// import { Debug, Physics, useBox, usePlane } from "@react-three/cannon";
// import { Physics, RigidBody } from "@react-three/rapier";

export default function Agent() {
  const [ready, setReady] = useState<boolean>(false);
  const agent = useRef<Mesh>(null);
  // const [agent, api] = useBox(() => ({ mass: 1,position:[0,2,0],args:[0.1,0.1,0.1]}), useRef<Mesh>(null));
  // const [plane] = usePlane(
  //   () => ({
  //     position: [0, 1, 0],
  //     rotation: [-Math.PI / 2, 0, 0],
  //     // type: "Static",
  //   }),
  //   useRef<Mesh>(null)
  // );
  const { isJoy } = useTrackedStore();

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <RigidBody position={[0, 5, 0]}>
        <mesh ref={agent}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color="steelBlue" />
          <FollowCamera target={agent.current} />
          <Label/>
        </mesh>
      </RigidBody>
      <RigidBody position={[0, 1, 0]}>
        <Plane rotation={[-Math.PI / 2, 0, 0]} args={[5, 5]} />
      </RigidBody>
      {ready && isJoy && <Joystick target={agent.current} />}
    </>
  );
}

function FollowCamera({ target }: any) {
  const camera = useRef<THREE.PerspectiveCamera>();
  const { isJoy } = useTrackedStore();
  useFrame((state, delta) => {
    if (!isJoy) return;

    state.camera.position.lerp(
      camera.current?.getWorldPosition(new THREE.Vector3())!,
      0.03
    );
    state.camera.lookAt(
      target?.position.x,
      target?.position.y + 0.2,
      target?.position.z
    );
  });

  return <PerspectiveCamera position={[0, 0.5, 1]} ref={camera} />;
}
