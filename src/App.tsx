import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./Map";
import { DirectionalLight, Vector3 } from "three";

export default function App() {
  const sunColor = "#fffdf0";
  const skyColor = "#c8e3fa";

  const sunLight = useRef<DirectionalLight>(null);

  return (
    <Canvas
      gl={{
        preserveDrawingBuffer: true,
      }}
      shadows
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <Model />
        <directionalLight
          intensity={2}
          castShadow
          position={new Vector3(100, 100, 100)}
          shadow-mapSize={[4096, 4096]}
          color={sunColor}
          ref={sunLight}
        />
        <directionalLight
          intensity={0.3}
          position={new Vector3(-100, -100, 100)}
          color={skyColor}
        />
        <directionalLight
          intensity={0.5}
          position={new Vector3(-100, 100, -100)}
          color={skyColor}
        />
        <directionalLight intensity={0.5} position={new Vector3(100)} />
        <hemisphereLight intensity={1} castShadow />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
