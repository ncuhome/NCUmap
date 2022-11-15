import { useSpring, config, animated } from "@react-spring/three";
import { PerspectiveCamera } from "@react-three/drei";

export default function OverCamera() {
  // 俯瞰相机最佳起始位置
  // x: -19.029467803079836, y: 15.08575775846176, z: -8.453932312930382
  const overPosition = [-19.02946, 15.085757, -8.4539323];
  const { position } = useSpring({
    from: {
      position: [overPosition[0], overPosition[1] + 500, overPosition[2]],
    },
    to: { position: overPosition },
    config: { ...config.slow, precision: 0.0001 },
  });
  const AniCamera = animated(PerspectiveCamera);
  return (
    <AniCamera fov={40} position={position as any as number} makeDefault />
  );
}
