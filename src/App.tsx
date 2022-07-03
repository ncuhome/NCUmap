import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useHelper, Stats, Sky } from "@react-three/drei";
import { DirectionalLight, Vector3 } from "three";
import {
  DirectionalLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
} from "three";

import Model from "./Map";
import { useTrackedStore } from "./store";

function Lights() {
  const sunColor = "#fffdf0";
  const skyColor = "#c8e3fa";
  const sunLight = useRef<DirectionalLight>(null);
  const skyLight = useRef<DirectionalLight>(null);
  const light1 = useRef<DirectionalLight>(null);
  const light2 = useRef<DirectionalLight>(null);
  const light3 = useRef<HemisphereLight>(null);

  useHelper(sunLight, DirectionalLightHelper, 5);
  useHelper(skyLight, DirectionalLightHelper, 5);
  useHelper(light1, DirectionalLightHelper, 5);
  useHelper(light2, DirectionalLightHelper, 5);
  useHelper(light3, HemisphereLightHelper, 5);

  return (
    <>
      <directionalLight
        intensity={3}
        castShadow
        position={new Vector3(10, 10, 10)}
        shadow-mapSize={[4096, 4096]}
        color={sunColor}
        ref={sunLight}
      />
      <directionalLight
        intensity={0.5}
        position={new Vector3(-10, 10, -10)}
        color={skyColor}
        ref={skyLight}
      />
      <directionalLight
        intensity={0.3}
        position={new Vector3(-10, -10, 10)}
        color={skyColor}
        ref={light1}
      />
      <directionalLight
        intensity={0.5}
        position={new Vector3(100)}
        ref={light2}
      />
      <hemisphereLight intensity={1} ref={light3} />
    </>
  );
}

export default function App() {
  const state = useTrackedStore();
  return (
    <Canvas
      gl={{
        preserveDrawingBuffer: true,
      }}
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [5, 5, -5] }}
    >
      <Suspense fallback={null}>
        <Model />
        <Lights />
        <Sky />
        <Stats />
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          onChange={(e) => state.setCameraChanged(true)}
        />
      </Suspense>
    </Canvas>
  );
}
