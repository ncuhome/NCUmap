import { useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Stats,
  Bounds,
  Loader,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { DirectionalLight, Vector3 } from "three";
import { HemisphereLight } from "three";
import * as THREE from "three";
import { Physics, Debug } from "@react-three/rapier";
import { animated, config, useSpring } from "@react-spring/three";

import { initPosition } from "@/config";
import { useTrackedStore } from "@/store";
import { Model as Map } from "@/Map";
import Agent from "@components/Agent";
import MultiLevelLabels from "@components/MultiLevelLabels";
import Back from "./components/Back";
import Overlay from "./components/Overlay";

export default function App() {
  const { isZoomed, labelClass, setLabelClass, setLookAt } = useTrackedStore();
  return (
    <>
      {/* <Loading /> */}
      <Loader />
      <Canvas
        // shadows
        dpr={[1, 1.5]}
      >
        <OverCamera />
        <Physics>
          <Debug />
          {/* <Agent /> */}
          <Bounds damping={3} margin={isZoomed ? 1.2 : 0.5}>
            {/* <SelectZoom> */}
            <Map />
            {/* <BakeShadows /> */}
            {/* </SelectZoom> */}
          </Bounds>
        </Physics>
        <Lights />
        <Environment background near={1} far={1000} resolution={256}>
          <mesh scale={100}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial side={THREE.BackSide} color="#87CEFA" />
          </mesh>
        </Environment>
        <MultiLevelLabels />
        {/* <Stats /> */}
        <Controls />
      </Canvas>
      {/* <ZoomButton /> */}
      <Overlay>
        <div id="joystickContainer"></div>
        {labelClass === 2 && (
          <Back
            onClick={() => {
              setLabelClass(1);
              setLookAt("");
            }}
          />
        )}
      </Overlay>
    </>
  );
}

function OverCamera() {
  const ref = useRef<any>(null);
  const { position } = useSpring({
    from: {
      position: [initPosition.x, initPosition.y + 500, initPosition.z],
    },
    to: { position: [initPosition.x, initPosition.y, initPosition.z] },
    config: { ...config.slow, precision: 0.001 },
  });
  const AniCamera = animated(PerspectiveCamera);

  const set = useThree((state) => state.set);
  useLayoutEffect(() => void set({ camera: ref.current }), []);

  return (
    <AniCamera
      ref={ref}
      fov={40}
      position={position as any as Vector3}
      makeDefault
    />
  );
}

function Controls() {
  const { gl, camera } = useThree();
  const { lookAt } = useTrackedStore();

  return (
    <OrbitControls
      // autoRotate
      // enabled={false}
      target={[lookAt.x, lookAt.y, lookAt.z]}
      // args={[camera, gl.domElement]}
      // autoRotateSpeed={0.3}
      // makeDefault
      // zoomSpeed={2}
      // minDistance={1}
      // maxDistance={20}
      // maxPolarAngle={(Math.PI * 1.4) / 3}
      // onChange={() => state.setCameraChanged(true)}
    />
  );
}

function Lights() {
  const sunColor = "#fffdf0";
  const skyColor = "#c8e3fa";
  const sunLight = useRef<DirectionalLight>(null);
  const skyLight = useRef<DirectionalLight>(null);
  const light1 = useRef<DirectionalLight>(null);
  const light2 = useRef<DirectionalLight>(null);
  const light3 = useRef<HemisphereLight>(null);

  // useHelper(sunLight, DirectionalLightHelper, 5);
  // useHelper(skyLight, DirectionalLightHelper, 5);
  // useHelper(light1, DirectionalLightHelper, 5);
  // useHelper(light2, DirectionalLightHelper, 5);
  // useHelper(light3, HemisphereLightHelper, 5);

  const shadowRange = 9;
  return (
    <>
      <directionalLight
        intensity={3}
        castShadow
        position={new Vector3(10, 10, 10)}
        shadow-mapSize={[4096, 4096]}
        shadow-camera-top={shadowRange}
        shadow-camera-bottom={-shadowRange}
        shadow-camera-left={shadowRange}
        shadow-camera-right={-shadowRange}
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
      <hemisphereLight intensity={0.3} color={skyColor} ref={light3} />
    </>
  );
}
