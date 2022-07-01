import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Text, Cloud } from "@react-three/drei";
import DatGui, { DatNumber, DatSelect, DatButton } from "react-dat-gui";

import Map from "./Map";

export default function App() {
  useEffect(() => {
    // gui.add(ambLightRef.current, "intensity", 0, 10);
  }, []);
  return (
    <Suspense fallback={null}>
      <Canvas
        shadows
        gl={{ alpha: false }}
        camera={{ position: [5, 5, 12], fov: 50 }}
        onCreated={({ gl, camera }) => {
          camera.lookAt(0, 0, 0);
        }}
      >
        {/* <hemisphereLight intensity={0.125} color="#8040df" groundColor="red" /> */}
        <ambientLight intensity={0.1}  />
        <spotLight
          castShadow
          color="white"
          intensity={20}
          position={[-50, 50, 40]}
          angle={0.25}
          penumbra={1}
          shadow-mapSize={[128, 128]}
          shadow-bias={0.00005}
        />

        <Map />
        <color attach="background" args={["#fff0ea"]} />
        <OrbitControls />
        {/* <fog attach="fog" args={["#fff0ea", 10, 60]} /> */}
        {/* <Cloud></Cloud> */}
        {/* <Environment preset="apartment" background /> */}
      </Canvas>
    </Suspense>
  );
}
