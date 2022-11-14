import {
  ReactNode,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Canvas, Object3DNode, useFrame, useThree } from "@react-three/fiber";
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
  PerspectiveCamera,
  useHelper,
  CubicBezierLine,
  QuadraticBezierLine,
  LineProps,
  Plane,
  Environment,
} from "@react-three/drei";
import {
  CameraHelper,
  CubicBezierCurve3,
  DirectionalLight,
  QuadraticBezierCurve3,
  Vector3,
} from "three";
import {
  DirectionalLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
} from "three";
import * as THREE from "three";

import { useTrackedStore } from "./store";
import { hasChinese } from "../scripts/regexp";
import ZoomButton from "./ZoomButton";
import { Model as Map } from "./Map";
import Loading from "./Loading";
import Agent from "./Agent";
import { Line2 } from "three-stdlib";
// import { Debug, Physics } from "@react-three/cannon";
import { Physics, Debug, RigidBody } from "@react-three/rapier";
import Label from "./Label";
import { animated, useSpring,config } from "@react-spring/three";

export default function App() {
  const { isZoomed } = useTrackedStore();
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
        <Stats />
        <Controls />
      </Canvas>
      {/* <ZoomButton /> */}
      <div id="joystickContainer"></div>
    </>
  );

  function MultiLevelLabels() {
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

  function CameraCurve() {
    const { scene, camera } = useThree();
    const cameraInitPos = camera.position;
    const curve = new THREE.CubicBezierCurve3(
      cameraInitPos,
      new THREE.Vector3(-15.6, 2.9, -7.5),
      new THREE.Vector3(-7.0, 13.2, 9.0),
      new THREE.Vector3(13.2, 7.1, 9.1)
    );

    const points = curve.getPoints(50);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const material = new THREE.LineBasicMaterial({ color: "#000" });

    const curveObject = new THREE.Line(geometry, material);
    scene.add(curveObject);
    const speed = 0.1;

    const pathTarget = new THREE.Vector3(0, 0, 0);

    const lerpTo = (position: Vector3) => {
      camera.position.lerp(position, 0.02);
    };

    const controlPoints = [
      new THREE.Vector3(14, 7, -8),
      new THREE.Vector3(-15.6, 2.9, -7.5),
      new THREE.Vector3(-7.0, 13.2, 9.0),
      new THREE.Vector3(13.2, 7.1, 9.1),
    ];

    return useFrame(({ clock }) => {
      curve.getPoint((clock.getElapsedTime() * speed) % 1.0, pathTarget);
      const step = Math.floor(clock.getElapsedTime() % 4);
      console.log(step);
      lerpTo(controlPoints[step]);
      // camera.position.copy(pathTarget)
      // camera.position.lerp(pathTarget, 0.02);
      // console.log(camera.position)
    });
  }

  function OverCamera() {
    // 俯瞰相机最佳起始位置
    // x: -19.029467803079836, y: 15.08575775846176, z: -8.453932312930382
    const overPosition = [-19.02946, 15.085757, -8.4539323]
    const {position}=useSpring({
      from: { position: [overPosition[0], overPosition[1]+300, overPosition[2]] },
      to: { position: overPosition },
      config: {...config.molasses,precision:0.0001},
    })
    const AniCamera = animated(PerspectiveCamera)
    return (
      <AniCamera
        fov={40}
        position={position as any as number}
        makeDefault
      />
    );
  }

  function Controls() {
    const { gl, camera } = useThree();

    return (
      <OrbitControls
        // autoRotate
        target={[0, 0, 0]}
        args={[camera, gl.domElement]}
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

  function SelectZoom({ children }) {
    const { isZoomed, setZoomed } = useTrackedStore();
    const api = useBounds();
    const { scene } = useThree();
    // useEffect(() => {
    //   const floor = scene.getObjectByName("FocusPlane");
    //   if (!isZoomed) {
    //     api.refresh(floor).fit();
    //   }
    // }, [isZoomed]);

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
