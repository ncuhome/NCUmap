import { ReactNode, Suspense, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useHelper,
  Stats,
  Sky,
  Bounds,
  useBounds,
} from "@react-three/drei";
import { DirectionalLight, Vector3 } from "three";
import * as THREE from "three";
import {
  DirectionalLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
} from "three";

import Map from "./Map";
import { useTrackedStore } from "./store";
import Post from "./Post";

interface IProps {
  children: ReactNode;
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

function SelectZoom({ children }: IProps) {
  const api = useBounds();
  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => (
        e.button === 0 && api.refresh().fit(), console.log(1)
      )}
    >
      {children}
    </group>
  );
}



export default function App() {
  // const { selectedObjects, setSelectedObjects } = useTrackedStore();
  // const { scene, camera } = useThree();
  // const mouse = new THREE.Vector2();
  // const raycaster = new THREE.Raycaster();

  // const checkIntersection = () => {
  //   raycaster.setFromCamera(mouse, camera);
  //   const intersects = raycaster.intersectObject(scene, true);
  //   if (intersects.length > 0) {
  //     const selectedObject = intersects[0].object;
  //     setSelectedObjects([selectedObject]);
  //     console.log(selectedObject);
  //   } else {
  //     // outlinePass.selectedObjects = [];
  //   }
  // };

  return (
    <Canvas
      gl={{
        preserveDrawingBuffer: true,
      }}
      shadows
      dpr={[1, 1.5]}
      camera={{
        position: new Vector3(5, 5, -5),
        fov: 40,
      }}
      // onPointerMove={(event) => {
      //   if (event.isPrimary === false) return;
      //   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      //   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      //   checkIntersection();
      // }}
    >
      <Suspense fallback={null} >

        <Bounds>
          <SelectZoom>
            <Map />
          </SelectZoom>
        </Bounds>
        <Lights />
        <Sky />
        <Stats />
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 2} />
        <Post/>
      </Suspense>
    </Canvas>
  );
}
