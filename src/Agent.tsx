import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { DoubleSide } from "three";
import * as THREE from "three";
import Joystick from "./Joystick";
import { useTrackedStore } from "./store";

export default function Agent() {
  const agent = useRef<THREE.Mesh>(null);
  const [ready, setReady] = useState<boolean>(false);
  const { isJoy } = useTrackedStore();

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <mesh ref={agent} position={[0, -0.35, 0]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshBasicMaterial color="steelBlue" />
        <FollowCamera target={agent.current} />
      </mesh>

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
