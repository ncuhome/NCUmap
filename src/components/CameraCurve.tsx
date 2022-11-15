import { useThree, useFrame } from "@react-three/fiber";
import THREE, { Vector3 } from "three";

export default function CameraCurve() {
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
