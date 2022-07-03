import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { Billboard, Text, useGLTF, useIntersect } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame, useThree } from "@react-three/fiber";

import { useTrackedStore } from "./store";
import modelUrl from "/map.glb?url";
import Label from "./Label";

type GLTFResult = GLTF & {
  nodes: {
    Circle013: THREE.Mesh;
    Circle013_1: THREE.Mesh;
    Circle013_2: THREE.Mesh;
    Circle013_3: THREE.Mesh;
    艺术楼: THREE.Mesh;
    篮球场: THREE.Mesh;
    Circle003: THREE.Mesh;
    Circle003_1: THREE.Mesh;
    Circle003_2: THREE.Mesh;
    Circle003_3: THREE.Mesh;
    网球场: THREE.Mesh;
    空间研究院: THREE.Mesh;
    研究生院: THREE.Mesh;
    篮球场002: THREE.Mesh;
    留园: THREE.Mesh;
    网球羽毛球场: THREE.Mesh;
    理科生命大楼B区: THREE.Mesh;
    篮球场001: THREE.Mesh;
    理科生命大楼A区: THREE.Mesh;
    环境楼: THREE.Mesh;
    湖: THREE.Mesh;
    白帆运动场: THREE.Mesh;
    汽车电子楼: THREE.Mesh;
    水电楼: THREE.Mesh;
    水利馆: THREE.Mesh;
    第12实验大楼: THREE.Mesh;
    正气广场: THREE.Mesh;
    第56实验大楼: THREE.Mesh;
    校医院: THREE.Mesh;
    材料楼: THREE.Mesh;
    机电楼: THREE.Mesh;
    服务大楼: THREE.Mesh;
    昌海楼: THREE.Mesh;
    建工楼B区: THREE.Mesh;
    法学楼: THREE.Mesh;
    建工楼A区: THREE.Mesh;
    天健垃圾场: THREE.Mesh;
    ["天健园餐厅（九十食堂）"]: THREE.Mesh;
    工程训练中心2: THREE.Mesh;
    天健30栋: THREE.Mesh;
    工程训练中心1: THREE.Mesh;
    天健29栋: THREE.Mesh;
    天健28栋: THREE.Mesh;
    安保楼: THREE.Mesh;
    天健27栋: THREE.Mesh;
    天健26栋: THREE.Mesh;
    学府大道正门: THREE.Mesh;
    天健25栋: THREE.Mesh;
    天健24栋: THREE.Mesh;
    天健23栋: THREE.Mesh;
    天健22栋: THREE.Mesh;
    天健21栋: THREE.Mesh;
    天健20栋: THREE.Mesh;
    天健19栋: THREE.Mesh;
    外经楼: THREE.Mesh;
    基础实验大楼: THREE.Mesh;
    地面: THREE.Mesh;
    图书馆: THREE.Mesh;
    国际学术交流中心: THREE.Mesh;
    国际公寓楼: THREE.Mesh;
    嘉言路北门001: THREE.Mesh;
    嘉言路北门: THREE.Mesh;
    办公楼: THREE.Mesh;
    前湖大道门: THREE.Mesh;
    学工楼: THREE.Mesh;
    六七食堂: THREE.Mesh;
    信工楼B区: THREE.Mesh;
    信工楼E区: THREE.Mesh;
    体育馆: THREE.Mesh;
    信工楼C区: THREE.Mesh;
    信工楼A区: THREE.Mesh;
    Circle016: THREE.Mesh;
    Circle016_1: THREE.Mesh;
    Circle016_2: THREE.Mesh;
    Circle016_3: THREE.Mesh;
    休闲9栋: THREE.Mesh;
    Circle014: THREE.Mesh;
    Circle014_1: THREE.Mesh;
    Circle014_2: THREE.Mesh;
    Circle014_3: THREE.Mesh;
    休闲7栋: THREE.Mesh;
    ["休闲6-7连接"]: THREE.Mesh;
    休闲8栋: THREE.Mesh;
    休闲6栋: THREE.Mesh;
    休闲4栋: THREE.Mesh;
    休闲3栋: THREE.Mesh;
    休闲5栋: THREE.Mesh;
    休闲1栋: THREE.Mesh;
    休闲2栋: THREE.Mesh;
    休闲18栋: THREE.Mesh;
    休闲17栋: THREE.Mesh;
    休闲15栋: THREE.Mesh;
    游泳馆: THREE.Mesh;
    休闲16栋: THREE.Mesh;
    休闲12栋: THREE.Mesh;
    休闲14栋: THREE.Mesh;
    人文楼: THREE.Mesh;
    休闲10栋: THREE.Mesh;
    一二食堂: THREE.Mesh;
    Plane014: THREE.Mesh;
    map_2osm_roads_service: THREE.Mesh;
    慧源楼: THREE.Mesh;
    Cube: THREE.Mesh;
    Circle001: THREE.Mesh;
    Circle001_1: THREE.Mesh;
    Circle001_2: THREE.Mesh;
    游泳馆001: THREE.Mesh;
    休闲11栋: THREE.Mesh;
    三四食堂: THREE.Mesh;
    map_2osm_roads_secondary: THREE.Mesh;
    map_2osm_roads_residential: THREE.Mesh;
    map_2osm_roads_primary: THREE.Mesh;
    map_2osm_forest: THREE.Mesh;
    Grid: THREE.Mesh;
  };
  materials: {
    ["Playground Ground"]: THREE.MeshStandardMaterial;
    ["Football-Playground-mark.003"]: THREE.MeshStandardMaterial;
    ["Football Playground Dark.003"]: THREE.MeshStandardMaterial;
    ["Football Playground Light.003"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["water.001"]: THREE.MeshStandardMaterial;
    ["forest.001"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
    ["roads_service.001"]: THREE.MeshStandardMaterial;
    ["Square Grass"]: THREE.MeshStandardMaterial;
    ["Square Grey Stone"]: THREE.MeshStandardMaterial;
    ["Square Brown Stone"]: THREE.MeshStandardMaterial;
    ["Swimming Pool Tile Procedural.001"]: THREE.MeshStandardMaterial;
    ["roads_secondary.001"]: THREE.MeshStandardMaterial;
    ["roads_residential.001"]: THREE.MeshStandardMaterial;
    ["roads_primary.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const { isCameraChanged, setCameraChanged } = useTrackedStore();

  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(modelUrl) as GLTFResult;
  let visibleObjects: THREE.Object3D<THREE.Event>[] = [];

  // const visible = useRef(false);
  // const meshRef = useIntersect((isVisible) => (visible.current = isVisible));
  const scene = useThree(({ scene }) => scene);
  const camera = useThree(({ camera }) => camera);

  useEffect(() => {
    if (!isCameraChanged) return;

    visibleObjects = [];
    const frustum = new THREE.Frustum().setFromProjectionMatrix(
      new THREE.Matrix4().multiplyMatrices(
        camera.projectionMatrix,
        camera.matrixWorldInverse
      )
    );
    scene.traverse((node) => {
      if (
        node?.isMesh &&
        (frustum.containsPoint(node.position) || frustum.intersectsObject(node))
      ) {
        visibleObjects.push(node);
      }
    });

    // const la:Object3D = nodes.空间研究院
    // nodes.图书馆.children = [la]
    // console.log(nodes.图书馆);

    console.log(visibleObjects);

    setCameraChanged(false);
  }, [isCameraChanged]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        name="运动场004"
        position={[1.90052, -0.2962, 3.21018]}
        rotation={[0, 0.18453, 0]}
      >
        <mesh
          name="Circle013"
          children={<Label text="Circle013"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle013.geometry}
          material={materials["Playground Ground"]}
        />
        <mesh
          name="Circle013_1"
          children={<Label text="Circle013_1"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle013_1.geometry}
          material={materials["Football-Playground-mark.003"]}
        />
        <mesh
          name="Circle013_2"
          children={<Label text="Circle013_2"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle013_2.geometry}
          material={materials["Football Playground Dark.003"]}
        />
        <mesh
          name="Circle013_3"
          children={<Label text="Circle013_3"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle013_3.geometry}
          material={materials["Football Playground Light.003"]}
        />
      </group>
      <mesh
        name="篮球场"
        children={<Label text="篮球场"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.篮球场.geometry}
        material={materials["Material.003"]}
        position={[1.8827, -0.29414, 4.37086]}
        rotation={[0, 0.18482, 0]}
      />
      <mesh
        name="空间研究院"
        children={<Label text="空间研究院"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.空间研究院.geometry}
        material={nodes.空间研究院.material}
        position={[0.23091, -0.18905, 1.39191]}
        rotation={[0, -0.04788, 0]}
      />
      <mesh
        name="艺术楼"
        children={<Label text="艺术楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.艺术楼.geometry}
        material={nodes.艺术楼.material}
        position={[-4.45281, -0.16246, -3.55283]}
      />
      <mesh
        name="研究生院"
        children={<Label text="研究生院"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.研究生院.geometry}
        material={nodes.研究生院.material}
        position={[1.59522, -0.23091, 2.58395]}
        rotation={[0, -1.5388, 0]}
      />
      <group
        name="运动场"
        position={[7.09602, -0.32014, 5.29088]}
        rotation={[0, -0.17382, 0]}
      >
        <mesh
          name="Circle003"
          children={<Label text="Circle003"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={materials["Playground Ground"]}
        />
        <mesh
          name="Circle003_1"
          children={<Label text="Circle003_1"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle003_1.geometry}
          material={materials["Football-Playground-mark.003"]}
        />
        <mesh
          name="Circle003_2"
          children={<Label text="Circle003_2"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle003_2.geometry}
          material={materials["Football Playground Dark.003"]}
        />
        <mesh
          name="Circle003_3"
          children={<Label text="Circle003_3"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle003_3.geometry}
          material={materials["Football Playground Light.003"]}
        />
      </group>
      <mesh
        name="网球场"
        children={<Label text="网球场"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.网球场.geometry}
        material={materials["Material.003"]}
        position={[2.14973, -0.29414, 3.84399]}
        rotation={[0, 0.18482, 0]}
      />
      <mesh
        name="留园"
        children={<Label text="留园"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.留园.geometry}
        material={nodes.留园.material}
        position={[-3.57387, -0.19976, -6.42865]}
        rotation={[Math.PI, -0.23169, Math.PI]}
      />
      <mesh
        name="网球羽毛球场"
        children={<Label text="网球羽毛球场"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.网球羽毛球场.geometry}
        material={nodes.网球羽毛球场.material}
        position={[-6.80614, -0.19478, -5.6277]}
        rotation={[-Math.PI, 1.16179, -Math.PI]}
      />
      <mesh
        name="理科生命大楼B区"
        children={<Label text="理科生命大楼B区"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.理科生命大楼B区.geometry}
        material={nodes.理科生命大楼B区.material}
        position={[-2.07708, -0.10084, 2.73427]}
        rotation={[0, 0.1952, 0]}
      />
      <mesh
        name="篮球场002"
        children={<Label text="篮球场002"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.篮球场002.geometry}
        material={materials["Material.003"]}
        position={[2.46287, -0.29414, 4.26239]}
        rotation={[0, 0.18482, 0]}
      />
      <mesh
        name="篮球场001"
        children={<Label text="篮球场001"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.篮球场001.geometry}
        material={materials["Material.003"]}
        position={[1.86491, -0.29414, 4.37418]}
        rotation={[0, 0.18482, 0]}
      />
      <mesh
        name="理科生命大楼A区"
        children={<Label text="理科生命大楼A区"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.理科生命大楼A区.geometry}
        material={nodes.理科生命大楼A区.material}
        position={[-1.74373, -0.10084, 2.66836]}
        rotation={[0, 0.1952, 0]}
      />
      <mesh
        name="环境楼"
        children={<Label text="环境楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.环境楼.geometry}
        material={nodes.环境楼.material}
        position={[-2.52785, -0.16477, 3.25171]}
        rotation={[Math.PI, -0.19705, Math.PI]}
      />
      <mesh
        name="湖"
        children={<Label text="湖"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.湖.geometry}
        material={materials["water.001"]}
        position={[0.56785, -0.38236, -0.13486]}
        rotation={[-Math.PI, 1.38467, -Math.PI]}
      />
      <mesh
        name="白帆运动场"
        children={<Label text="白帆运动场"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.白帆运动场.geometry}
        material={nodes.白帆运动场.material}
        position={[-5.52563, -0.25009, -5.57502]}
      />
      <mesh
        name="汽车电子楼"
        children={<Label text="汽车电子楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.汽车电子楼.geometry}
        material={nodes.汽车电子楼.material}
        position={[-4.77874, -0.16477, 1.81774]}
        rotation={[0, 0.15517, 0]}
      />
      <mesh
        name="水电楼"
        children={<Label text="水电楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.水电楼.geometry}
        material={nodes.水电楼.material}
        position={[-3.30459, -0.16477, 0.0244]}
        rotation={[0, -0.22177, 0]}
      />
      <mesh
        name="水利馆"
        children={<Label text="水利馆"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.水利馆.geometry}
        material={nodes.水利馆.material}
        position={[-5.76894, -0.23378, 1.3527]}
        rotation={[0, 0.76139, 0]}
      />
      <mesh
        name="第12实验大楼"
        children={<Label text="第12实验大楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.第12实验大楼.geometry}
        material={nodes.第12实验大楼.material}
        position={[6.97682, -0.29625, 2.62356]}
      />
      <mesh
        name="第56实验大楼"
        children={<Label text="第56实验大楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.第56实验大楼.geometry}
        material={nodes.第56实验大楼.material}
        position={[6.91316, -0.29625, 4.12602]}
      />
      <mesh
        name="校医院"
        children={<Label text="校医院"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.校医院.geometry}
        material={nodes.校医院.material}
        position={[-6.51092, -0.16513, -3.75047]}
      />
      <mesh
        name="正气广场"
        children={<Label text="正气广场"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.正气广场.geometry}
        material={materials["forest.001"]}
        position={[-3.07409, -0.28652, -2.47679]}
      />
      <mesh
        name="机电楼"
        children={<Label text="机电楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.机电楼.geometry}
        material={nodes.机电楼.material}
        position={[-4.45153, -0.16477, 1.6126]}
        rotation={[0, 0.15517, 0]}
      />
      <mesh
        name="服务大楼"
        children={<Label text="服务大楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.服务大楼.geometry}
        material={nodes.服务大楼.material}
        position={[-0.65383, -0.23091, 3.43549]}
        rotation={[-Math.PI, 1.5388, -Math.PI]}
      />
      <mesh
        name="材料楼"
        children={<Label text="材料楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.材料楼.geometry}
        material={nodes.材料楼.material}
        position={[-2.67946, -0.16477, 2.51145]}
        rotation={[0, 0.19705, 0]}
      />
      <mesh
        name="昌海楼"
        children={<Label text="昌海楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.昌海楼.geometry}
        material={nodes.昌海楼.material}
        position={[3.47941, -0.17572, 2.04344]}
        rotation={[0, 0.20802, 0]}
      />
      <mesh
        name="建工楼B区"
        children={<Label text="建工楼B区"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.建工楼B区.geometry}
        material={nodes.建工楼B区.material}
        position={[-5.54622, -0.16477, 1.00603]}
        rotation={[0, 0.41275, 0]}
      />
      <mesh
        name="建工楼A区"
        children={<Label text="建工楼A区"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.建工楼A区.geometry}
        material={nodes.建工楼A区.material}
        position={[-5.17882, -0.16477, 1.2066]}
        rotation={[0, 0.18291, 0]}
      />
      <mesh
        name="工程训练中心2"
        children={<Label text="工程训练中心2"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.工程训练中心2.geometry}
        material={nodes.工程训练中心2.material}
        position={[0.81877, -0.07663, 2.37654]}
        rotation={[0, 0.14346, 0]}
      />
      <mesh
        name="法学楼"
        children={<Label text="法学楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.法学楼.geometry}
        material={nodes.法学楼.material}
        position={[-3.99496, -0.10139, -1.19645]}
        rotation={[0, 0.19126, 0]}
      />
      <mesh
        name="工程训练中心1"
        children={<Label text="工程训练中心1"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.工程训练中心1.geometry}
        material={nodes.工程训练中心1.material}
        position={[0.3596, -0.07663, 2.28271]}
        rotation={[0, 0.14346, 0]}
      />
      <mesh
        name="天健垃圾场"
        children={<Label text="天健垃圾场"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健垃圾场.geometry}
        material={nodes.天健垃圾场.material}
        position={[-1.76894, -0.24273, 3.68106]}
        rotation={[0, 0.14484, 0]}
      />
      <mesh
        name="安保楼"
        children={<Label text="安保楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.安保楼.geometry}
        material={nodes.安保楼.material}
        position={[-1.68999, -0.18905, 1.62769]}
        rotation={[0, 0.16363, 0]}
      />
      <mesh
        name="天健园餐厅（九十食堂）"
        children={<Label text="天健园餐厅（九十食堂）"></Label>}
        castShadow
        receiveShadow
        geometry={nodes["天健园餐厅（九十食堂）"].geometry}
        material={nodes["天健园餐厅（九十食堂）"].material}
        position={[-0.02984, -0.1408, 3.38089]}
        rotation={[0, 0.18154, 0]}
      />
      <mesh
        name="学府大道正门"
        children={<Label text="学府大道正门"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.学府大道正门.geometry}
        material={materials["Material.001"]}
        position={[0.64918, -0.33902, -1.15974]}
      />
      <mesh
        name="天健30栋"
        children={<Label text="天健30栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健30栋.geometry}
        material={nodes.天健30栋.material}
        position={[3.58363, 0.06062, 3.05857]}
        rotation={[0, 0.20802, 0]}
      />
      <mesh
        name="天健29栋"
        children={<Label text="天健29栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健29栋.geometry}
        material={nodes.天健29栋.material}
        position={[3.17237, 0.06062, 3.01801]}
        rotation={[0, 0.18129, 0]}
      />
      <mesh
        name="天健28栋"
        children={<Label text="天健28栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健28栋.geometry}
        material={nodes.天健28栋.material}
        position={[2.78806, 0.06062, 3.13282]}
        rotation={[0, 0.19283, 0]}
      />
      <mesh
        name="天健27栋"
        children={<Label text="天健27栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健27栋.geometry}
        material={nodes.天健27栋.material}
        position={[1.09422, 0.06062, 4.00784]}
        rotation={[0, 0.14346, 0]}
      />
      <mesh
        name="天健26栋"
        children={<Label text="天健26栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健26栋.geometry}
        material={nodes.天健26栋.material}
        position={[0.99235, 0.06062, 3.34296]}
        rotation={[0, 0.14346, 0]}
      />
      <mesh
        name="天健25栋"
        children={<Label text="天健25栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健25栋.geometry}
        material={nodes.天健25栋.material}
        position={[0.5962, 0.06062, 3.42036]}
        rotation={[0, 0.14346, 0]}
      />
      <mesh
        name="天健24栋"
        children={<Label text="天健24栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健24栋.geometry}
        material={nodes.天健24栋.material}
        position={[0.69001, 0.06062, 4.05911]}
        rotation={[0, 0.14346, 0]}
      />
      <mesh
        name="天健23栋"
        children={<Label text="天健23栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健23栋.geometry}
        material={nodes.天健23栋.material}
        position={[0.15205, 0.06062, 3.98497]}
        rotation={[0, 0.14346, 0]}
      />
      <mesh
        name="天健22栋"
        children={<Label text="天健22栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健22栋.geometry}
        material={nodes.天健22栋.material}
        position={[-0.26787, 0.06062, 3.89626]}
        rotation={[0, 0.12961, 0]}
      />
      <mesh
        name="天健21栋"
        children={<Label text="天健21栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健21栋.geometry}
        material={nodes.天健21栋.material}
        position={[-0.66976, 0.06062, 3.83801]}
        rotation={[0, 0.12926, 0]}
      />
      <mesh
        name="天健20栋"
        children={<Label text="天健20栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健20栋.geometry}
        material={nodes.天健20栋.material}
        position={[-1.04513, 0.06062, 3.77303]}
        rotation={[0, 0.13729, 0]}
      />
      <mesh
        name="天健19栋"
        children={<Label text="天健19栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.天健19栋.geometry}
        material={nodes.天健19栋.material}
        position={[-1.39571, 0.06062, 3.71025]}
        rotation={[0, 0.14484, 0]}
      />
      <mesh
        name="外经楼"
        children={<Label text="外经楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.外经楼.geometry}
        material={nodes.外经楼.material}
        position={[-4.76711, -0.16306, -1.85548]}
        rotation={[0, 0.17345, 0]}
      />
      <mesh
        name="基础实验大楼"
        children={<Label text="基础实验大楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.基础实验大楼.geometry}
        material={nodes.基础实验大楼.material}
        position={[-0.7777, -0.10308, 2.64717]}
        rotation={[0, 0.1952, 0]}
      />
      <mesh
        name="地面"
        children={<Label text="地面"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.地面.geometry}
        material={nodes.地面.material}
        position={[0.56785, -0.43034, -0.13486]}
      />
      <mesh
        name="图书馆"
        castShadow
        receiveShadow
        geometry={nodes.图书馆.geometry}
        material={nodes.图书馆.material}
        position={[-0.54583, 0.34871, 1.55651]}
        rotation={[0, 0.18297, 0]}
      >
        <Billboard follow={true}>
          <Text
            fontSize={0.3}
            outlineWidth={"5%"}
            outlineColor="#000000"
            outlineOpacity={1}
            position={[-0.54583, 0.34871, 1.55651]}
          >
            library
          </Text>
        </Billboard>
      </mesh>
      <mesh
        name="国际学术交流中心"
        children={<Label text="国际学术交流中心"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.国际学术交流中心.geometry}
        material={nodes.国际学术交流中心.material}
        position={[3.98539, -0.07504, 1.49429]}
        rotation={[Math.PI, -0.20802, Math.PI]}
      />
      <mesh
        name="学工楼"
        children={<Label text="学工楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.学工楼.geometry}
        material={nodes.学工楼.material}
        position={[-7.406, -0.12091, -1.36411]}
        rotation={[-Math.PI, 1.37633, -Math.PI]}
      />
      <mesh
        name="国际公寓楼"
        children={<Label text="国际公寓楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.国际公寓楼.geometry}
        material={nodes.国际公寓楼.material}
        position={[3.94477, 0.06062, 2.23669]}
        rotation={[0, 0.20802, 0]}
      />
      <mesh
        name="信工楼B区"
        children={<Label text="信工楼B区"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.信工楼B区.geometry}
        material={nodes.信工楼B区.material}
        position={[-3.49834, -0.13857, 2.29686]}
        rotation={[0, 0.22658, 0]}
      />
      <mesh
        name="嘉言路北门001"
        children={<Label text="嘉言路北门001"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.嘉言路北门001.geometry}
        material={materials["Material.019"]}
        position={[8.32444, -0.17205, 0.58871]}
        rotation={[Math.PI / 2, 0, -3.0631]}
      />
      <mesh
        name="体育馆"
        children={<Label text="体育馆"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.体育馆.geometry}
        material={nodes.体育馆.material}
        position={[-3.40533, -0.16963, -5.73508]}
        rotation={[Math.PI, -0.23169, Math.PI]}
      />
      <mesh
        name="嘉言路北门"
        children={<Label text="嘉言路北门"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.嘉言路北门.geometry}
        material={materials["Material.019"]}
        position={[5.87046, -0.17205, 2.3438]}
        rotation={[Math.PI / 2, 0, -1.79666]}
      />
      <mesh
        name="办公楼"
        children={<Label text="办公楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.办公楼.geometry}
        material={nodes.办公楼.material}
        position={[-1.30614, -0.16477, -1.40779]}
        rotation={[Math.PI, -0.9946, Math.PI]}
      />
      <mesh
        name="前湖大道门"
        children={<Label text="前湖大道门"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.前湖大道门.geometry}
        material={materials["Material.019"]}
        position={[-8.19317, -0.2117, -5.63168]}
        rotation={[Math.PI / 2, 0, -0.60944]}
      />
      <mesh
        name="六七食堂"
        children={<Label text="六七食堂"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.六七食堂.geometry}
        material={nodes.六七食堂.material}
        position={[-8.50722, -0.19069, -2.61527]}
        rotation={[-Math.PI, 1.20299, -Math.PI]}
      />
      <mesh
        name="信工楼E区"
        children={<Label text="信工楼E区"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.信工楼E区.geometry}
        material={nodes.信工楼E区.material}
        position={[-4.2466, -0.13857, 2.46937]}
        rotation={[0, 0.22658, 0]}
      />
      <mesh
        name="信工楼C区"
        children={<Label text="信工楼C区"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.信工楼C区.geometry}
        material={nodes.信工楼C区.material}
        position={[-3.41088, -0.13857, 2.67625]}
        rotation={[0, 0.22658, 0]}
      />
      <mesh
        name="信工楼A区"
        children={<Label text="信工楼A区"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.信工楼A区.geometry}
        material={nodes.信工楼A区.material}
        position={[-3.49834, -0.13857, 2.29686]}
        rotation={[0, 0.22658, 0]}
      />
      <mesh
        name="休闲9栋"
        children={<Label text="休闲9栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲9栋.geometry}
        material={nodes.休闲9栋.material}
        position={[-7.38073, -0.21747, -3.47489]}
        rotation={[0, 0.19225, 0]}
      />
      <group
        name="休闲运动场001"
        position={[-5.52233, -0.23454, -5.5789]}
        rotation={[Math.PI, -0.00825, Math.PI]}
      >
        <mesh
          name="Circle016"
          children={<Label text="Circle016"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle016.geometry}
          material={materials["Playground Ground"]}
        />
        <mesh
          name="Circle016_1"
          children={<Label text="Circle016_1"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle016_1.geometry}
          material={materials["Football-Playground-mark.003"]}
        />
        <mesh
          name="Circle016_2"
          children={<Label text="Circle016_2"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle016_2.geometry}
          material={materials["Football Playground Dark.003"]}
        />
        <mesh
          name="Circle016_3"
          children={<Label text="Circle016_3"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle016_3.geometry}
          material={materials["Football Playground Light.003"]}
        />
      </group>
      <group
        name="休闲运动场"
        position={[-8.52016, -0.32014, -4.19868]}
        rotation={[Math.PI, -0.19541, Math.PI]}
      >
        <mesh
          name="Circle014"
          children={<Label text="Circle014"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle014.geometry}
          material={materials["Playground Ground"]}
        />
        <mesh
          name="Circle014_1"
          children={<Label text="Circle014_1"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle014_1.geometry}
          material={materials["Football-Playground-mark.003"]}
        />
        <mesh
          name="Circle014_2"
          children={<Label text="Circle014_2"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle014_2.geometry}
          material={materials["Football Playground Dark.003"]}
        />
        <mesh
          name="Circle014_3"
          children={<Label text="Circle014_3"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle014_3.geometry}
          material={materials["Football Playground Light.003"]}
        />
      </group>
      <mesh
        name="休闲7栋"
        children={<Label text="休闲7栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲7栋.geometry}
        material={nodes.休闲7栋.material}
        position={[-7.4284, -0.2094, -1.99413]}
        rotation={[0, 0.19225, 0]}
      />
      <mesh
        name="休闲6-7连接"
        children={<Label text="休闲6-7连接"></Label>}
        castShadow
        receiveShadow
        geometry={nodes["休闲6-7连接"].geometry}
        material={nodes["休闲6-7连接"].material}
        position={[-7.27431, -0.13922, -2.10114]}
        rotation={[0, 0.19199, 0]}
      />
      <mesh
        name="休闲8栋"
        children={<Label text="休闲8栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲8栋.geometry}
        material={nodes.休闲8栋.material}
        position={[-7.68508, -0.20715, -1.94918]}
        rotation={[0, 0.19225, 0]}
      />
      <mesh
        name="休闲6栋"
        children={<Label text="休闲6栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲6栋.geometry}
        material={nodes.休闲6栋.material}
        position={[-6.98965, -0.20883, -2.02608]}
        rotation={[0, 0.19225, 0]}
      />
      <mesh
        name="游泳馆001"
        children={<Label text="游泳馆001"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.游泳馆001.geometry}
        material={materials["Swimming Pool Tile Procedural.001"]}
        position={[-7.3117, -0.16246, -4.83394]}
        rotation={[0, 0.49073, 0]}
      />
      <mesh
        name="休闲4栋"
        children={<Label text="休闲4栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲4栋.geometry}
        material={nodes.休闲4栋.material}
        position={[-7.69845, -0.10768, -0.91898]}
        rotation={[0, 0.24218, 0]}
      />
      <mesh
        name="休闲5栋"
        children={<Label text="休闲5栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲5栋.geometry}
        material={nodes.休闲5栋.material}
        position={[-7.19427, -0.20386, -2.66299]}
        rotation={[0, 0.16505, 0]}
      />
      <mesh
        name="休闲3栋"
        children={<Label text="休闲3栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲3栋.geometry}
        material={nodes.休闲3栋.material}
        position={[-6.98122, -0.13857, -0.06926]}
        rotation={[0, 0.20465, 0]}
      />
      <mesh
        name="休闲2栋"
        children={<Label text="休闲2栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲2栋.geometry}
        material={nodes.休闲2栋.material}
        position={[-6.50884, -0.13857, 0.58357]}
        rotation={[0, 0.20465, 0]}
      />
      <mesh
        name="休闲1栋"
        children={<Label text="休闲1栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲1栋.geometry}
        material={nodes.休闲1栋.material}
        position={[-6.17293, -0.13857, 0.51385]}
        rotation={[0, 0.20465, 0]}
      />
      <mesh
        name="休闲18栋"
        children={<Label text="休闲18栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲18栋.geometry}
        material={nodes.休闲18栋.material}
        position={[-9.20489, -0.12091, -3.19379]}
        rotation={[-Math.PI, 1.0674, -Math.PI]}
      />
      <mesh
        name="休闲17栋"
        children={<Label text="休闲17栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲17栋.geometry}
        material={nodes.休闲17栋.material}
        position={[-8.84041, -0.21747, -3.23514]}
        rotation={[0, 0.08022, 0]}
      />
      <mesh
        name="休闲16栋"
        children={<Label text="休闲16栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲16栋.geometry}
        material={nodes.休闲16栋.material}
        position={[-8.561, -0.21747, -3.2523]}
        rotation={[0, 0.08022, 0]}
      />
      <mesh
        name="休闲15栋"
        children={<Label text="休闲15栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲15栋.geometry}
        material={nodes.休闲15栋.material}
        position={[-8.85818, -0.12091, -2.56429]}
        rotation={[-Math.PI, 1.0674, -Math.PI]}
      />
      <mesh
        name="休闲14栋"
        children={<Label text="休闲14栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲14栋.geometry}
        material={nodes.休闲14栋.material}
        position={[-8.50738, -0.12091, -1.9273]}
        rotation={[-Math.PI, 1.0674, -Math.PI]}
      />
      <mesh
        name="游泳馆"
        children={<Label text="游泳馆"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.游泳馆.geometry}
        material={nodes.游泳馆.material}
        position={[-7.3117, -0.17274, -4.83394]}
        rotation={[0, 0.49073, 0]}
      />
      <mesh
        name="休闲12栋"
        children={<Label text="休闲12栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲12栋.geometry}
        material={nodes.休闲12栋.material}
        position={[-8.26287, -0.21747, -3.3204]}
        rotation={[0, 0.19225, 0]}
      />
      <mesh
        name="休闲10栋"
        children={<Label text="休闲10栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲10栋.geometry}
        material={nodes.休闲10栋.material}
        position={[-7.67855, -0.21747, -3.42275]}
        rotation={[0, 0.19225, 0]}
      />
      <mesh
        name="一二食堂"
        children={<Label text="一二食堂"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.一二食堂.geometry}
        material={nodes.一二食堂.material}
        position={[-6.62539, -0.21191, -0.40585]}
        rotation={[0, 0.33153, 0]}
      />
      <mesh
        name="Plane014"
        children={<Label text="Plane014"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["forest.001"]}
        position={[-2.81548, -0.28814, 1.80895]}
        rotation={[0, 0.17878, 0]}
      />
      <mesh
        name="人文楼"
        children={<Label text="人文楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.人文楼.geometry}
        material={nodes.人文楼.material}
        position={[-3.99496, -0.10139, -1.19645]}
        rotation={[0, 0.19126, 0]}
      />
      <mesh
        name="map_2osm_roads_service"
        children={<Label text="map_2osm_roads_service"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.map_2osm_roads_service.geometry}
        material={materials["roads_service.001"]}
        position={[0.56785, -0.294, -0.13486]}
        rotation={[-Math.PI, 1.38467, -Math.PI]}
      />
      <mesh
        name="慧源楼"
        children={<Label text="慧源楼"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.慧源楼.geometry}
        material={nodes.慧源楼.material}
        position={[-5.88967, -0.19014, -0.64162]}
        rotation={[0, 0.56426, 0]}
      />
      <mesh
        name="Cube"
        children={<Label text="Cube"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[10.32173, 0.21909, 5.62666]}
        rotation={[0, -0.18129, 0]}
      />
      <group name="Circle" position={[8.27235, -0.37592, 2.45961]}>
        <mesh
          name="Circle001"
          children={<Label text="Circle001"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["Square Grass"]}
        />
        <mesh
          name="Circle001_1"
          children={<Label text="Circle001_1"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials["Square Grey Stone"]}
        />
        <mesh
          name="Circle001_2"
          children={<Label text="Circle001_2"></Label>}
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials["Square Brown Stone"]}
        />
      </group>
      <mesh
        name="休闲11栋"
        children={<Label text="休闲11栋"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.休闲11栋.geometry}
        material={nodes.休闲11栋.material}
        position={[-7.95583, -0.21747, -3.3742]}
        rotation={[0, 0.19225, 0]}
      />
      <mesh
        name="三四食堂"
        children={<Label text="三四食堂"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.三四食堂.geometry}
        material={nodes.三四食堂.material}
        position={[-7.68743, -0.22506, -2.76779]}
        rotation={[-Math.PI, 1.38906, -Math.PI]}
      />
      <mesh
        name="map_2osm_roads_secondary"
        children={<Label text="map_2osm_roads_secondary"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.map_2osm_roads_secondary.geometry}
        material={materials["roads_secondary.001"]}
        position={[0.56785, -0.294, -0.13486]}
        rotation={[-Math.PI, 1.38467, -Math.PI]}
      />
      <mesh
        name="map_2osm_roads_residential"
        children={<Label text="map_2osm_roads_residential"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.map_2osm_roads_residential.geometry}
        material={materials["roads_residential.001"]}
        position={[0.56785, -0.294, -0.13486]}
        rotation={[-Math.PI, 1.38467, -Math.PI]}
      />
      <mesh
        name="map_2osm_roads_primary"
        children={<Label text="map_2osm_roads_primary"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.map_2osm_roads_primary.geometry}
        material={materials["roads_primary.001"]}
        position={[0.56785, -0.294, -0.13486]}
        rotation={[-Math.PI, 1.38467, -Math.PI]}
      />
      <mesh
        name="map_2osm_forest"
        children={<Label text="map_2osm_forest"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.map_2osm_forest.geometry}
        material={materials["forest.001"]}
        position={[0.56785, -0.29532, -0.13486]}
        rotation={[-Math.PI, 1.38467, -Math.PI]}
      />
      <mesh
        name="Grid"
        children={<Label text="Grid"></Label>}
        castShadow
        receiveShadow
        geometry={nodes.Grid.geometry}
        material={materials["water.001"]}
        position={[8.91438, -0.39085, 3.08408]}
      />
    </group>
  );
}

useGLTF.preload(modelUrl);
