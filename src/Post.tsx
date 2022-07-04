import { Effects } from "@react-three/drei";
import { extend, useThree } from "@react-three/fiber";
import { FXAAShader, OutlinePass, SSAOPass } from "three-stdlib";
import THREE, { Camera, Scene } from "three";

import { useTrackedStore } from "./store";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      sSAOPass: {
        args: (number | Scene | (Camera & { manual?: boolean | undefined }))[];
        kernelRadius: number;
        kernelSize: number;
      };
      outlinePass: any;
    }
  }
}

//SSAO:Screen space ambient occlusion
//FXAA:Fast approximate anti-aliasing

extend({ SSAOPass, OutlinePass });

export default function Post() {
  const { scene, size, camera } = useThree();
  const aspect = window.innerWidth / window.innerHeight;
  const { selectedObjects: selectedObject } = useTrackedStore();
  return (
    <Effects
      multisamping={8}
      renderIndex={1}
      disableGamma={false}
      disableRenderPass={false}
      disableRender={false}
    >
      {/* <sSAOPass
        args={[scene, camera, 100, 100]}
        kernelRadius={1.2}
        kernelSize={0}
      /> */}

      {/* <shaderPass
        // attachArray="passes"
        args={[FXAAShader]}
        material-uniforms-resolution-value={[1 / size.width, 1 / size.height]}
        renderToScreen
      /> */}

      <outlinePass
        attachArray="passes"
        args={[aspect, scene, camera]}
        selectedObjects={scene.getObjectByName('图书馆')}
        visibleEdgeColor="red"
        edgeStrength={50}
        edgeThickness={1}
      />
    </Effects>
  );
}
