import { ReactNode, Suspense, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Stats,
  Sky,
  Bounds,
  useBounds,
  GizmoHelper,
  GizmoViewport,
  BakeShadows,
  AdaptiveDpr,
  AdaptiveEvents,
  Loader,
  useProgress,
} from "@react-three/drei";
import { DirectionalLight, Vector3 } from "three";
import {
  DirectionalLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
} from "three";

import { useTrackedStore } from "./store";
import { hasChinese } from "../scripts/regexp";
import ZoomButton from "./ZoomButton";
import Map from "./Map";
import Loading from "./Loading";

interface IProps {
  children: ReactNode;
}

export default function App() {
  const { isZoomed } = useTrackedStore();
  return (
    <>
      <Loading />
      {/* <Loader/> */}
      <Suspense fallback={<span>loading</span>}>
        <Canvas
          gl={{
            preserveDrawingBuffer: true,
          }}
          shadows
          dpr={[1, 1.5]}
          camera={{
            position: new Vector3(14, 7, -8),
            fov: 40,
          }}
        >
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
          <Bounds damping={3} margin={isZoomed ? 1.2 : 0.5}>
            <SelectZoom>
              <Map />
              <BakeShadows />
            </SelectZoom>
          </Bounds>
          <Lights />
          <Sky />
          <Stats />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.3}
            makeDefault
            zoomSpeed={2}
            minDistance={1}
            maxDistance={20}
            maxPolarAngle={(Math.PI * 1.4) / 3}
            // onChange={() => state.setCameraChanged(true)}
          />
          <AxisHelper />
        </Canvas>
      </Suspense>
      <ZoomButton />
    </>
  );

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

  function SelectZoom({ children }: IProps) {
    const { isZoomed, setZoomed } = useTrackedStore();
    const api = useBounds();
    const { scene } = useThree();
    useEffect(() => {
      const floor = scene.getObjectByName("FocusPlane");
      if (!isZoomed) {
        api.refresh(floor).fit();
      }
    }, [isZoomed]);

    return (
      <group
        onClick={(e) => {
          e.stopPropagation();
          // console.log(e.object.name)
          e.delta <= 2 &&
            e.object.name &&
            hasChinese(e.object.name) &&
            api.refresh(e.object).fit() &&
            setZoomed(true);
        }}
        onPointerMissed={(e) => {
          setZoomed(false);
        }}
      >
        {children}
      </group>
    );
  }

  function AxisHelper() {
    return (
      <GizmoHelper
        alignment="bottom-right" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
        // onUpdate={/* called during camera animation  */}
        // onTarget={/* return current camera target (e.g. from orbit controls) to center animation */}
        // renderPriority={/* use renderPriority to prevent the helper from disappearing if there is another useFrame(..., 1)*/}
      >
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
        {/* alternative: <GizmoViewcube /> */}
      </GizmoHelper>
    );
  }
}
