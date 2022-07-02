import modelUrl from "/map.glb?url";
import Label from "./Label";
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

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
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF(modelUrl) as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[1.9, -0.3, 3.21]} rotation={[0, 0.18, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle013.geometry}
          material={materials["Playground Ground"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle013_1.geometry}
          material={materials["Football-Playground-mark.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle013_2.geometry}
          material={materials["Football Playground Dark.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle013_3.geometry}
          material={materials["Football Playground Light.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.艺术楼.geometry}
        material={nodes.艺术楼.material}
        position={[-4.45, -0.16, -3.55]}
        children={<Label text="艺术楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.篮球场.geometry}
        material={materials["Material.003"]}
        position={[1.88, -0.29, 4.37]}
        rotation={[0, 0.18, 0]}
        children={<Label text="篮球场"></Label>}
      />
      <group position={[7.1, -0.32, 5.29]} rotation={[0, -0.17, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={materials["Playground Ground"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_1.geometry}
          material={materials["Football-Playground-mark.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_2.geometry}
          material={materials["Football Playground Dark.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_3.geometry}
          material={materials["Football Playground Light.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.网球场.geometry}
        material={materials["Material.003"]}
        position={[2.15, -0.29, 3.84]}
        rotation={[0, 0.18, 0]}
        children={<Label text="网球场"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.空间研究院.geometry}
        material={nodes.空间研究院.material}
        position={[0.23, -0.19, 1.39]}
        rotation={[0, -0.05, 0]}
        children={<Label text="空间研究院"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.研究生院.geometry}
        material={nodes.研究生院.material}
        position={[1.6, -0.23, 2.58]}
        rotation={[0, -1.54, 0]}
        children={<Label text="研究生院"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.篮球场002.geometry}
        material={materials["Material.003"]}
        position={[2.46, -0.29, 4.26]}
        rotation={[0, 0.18, 0]}
        children={<Label text="篮球场002"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.留园.geometry}
        material={nodes.留园.material}
        position={[-3.57, -0.2, -6.43]}
        rotation={[Math.PI, -0.23, Math.PI]}
        children={<Label text="留园"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.网球羽毛球场.geometry}
        material={nodes.网球羽毛球场.material}
        position={[-6.81, -0.19, -5.63]}
        rotation={[-Math.PI, 1.16, -Math.PI]}
        children={<Label text="网球羽毛球场"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.理科生命大楼B区.geometry}
        material={nodes.理科生命大楼B区.material}
        position={[-2.08, -0.1, 2.73]}
        rotation={[0, 0.2, 0]}
        children={<Label text="理科生命大楼B区"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.篮球场001.geometry}
        material={materials["Material.003"]}
        position={[1.86, -0.29, 4.37]}
        rotation={[0, 0.18, 0]}
        children={<Label text="篮球场001"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.理科生命大楼A区.geometry}
        material={nodes.理科生命大楼A区.material}
        position={[-1.74, -0.1, 2.67]}
        rotation={[0, 0.2, 0]}
        children={<Label text="理科生命大楼A区"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.环境楼.geometry}
        material={nodes.环境楼.material}
        position={[-2.53, -0.16, 3.25]}
        rotation={[Math.PI, -0.2, Math.PI]}
        children={<Label text="环境楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.湖.geometry}
        material={materials["water.001"]}
        position={[0.57, -0.38, -0.13]}
        rotation={[-Math.PI, 1.38, -Math.PI]}
        children={<Label text="湖"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.白帆运动场.geometry}
        material={nodes.白帆运动场.material}
        position={[-5.53, -0.25, -5.58]}
        children={<Label text="白帆运动场"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.汽车电子楼.geometry}
        material={nodes.汽车电子楼.material}
        position={[-4.78, -0.16, 1.82]}
        rotation={[0, 0.16, 0]}
        children={<Label text="汽车电子楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.水电楼.geometry}
        material={nodes.水电楼.material}
        position={[-3.3, -0.16, 0.02]}
        rotation={[0, -0.22, 0]}
        children={<Label text="水电楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.水利馆.geometry}
        material={nodes.水利馆.material}
        position={[-5.77, -0.23, 1.35]}
        rotation={[0, 0.76, 0]}
        children={<Label text="水利馆"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.第12实验大楼.geometry}
        material={nodes.第12实验大楼.material}
        position={[6.98, -0.3, 2.62]}
        children={<Label text="第12实验大楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.正气广场.geometry}
        material={materials["forest.001"]}
        position={[-3.07, -0.29, -2.48]}
        children={<Label text="正气广场"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.第56实验大楼.geometry}
        material={nodes.第56实验大楼.material}
        position={[6.91, -0.3, 4.13]}
        children={<Label text="第56实验大楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.校医院.geometry}
        material={nodes.校医院.material}
        position={[-6.51, -0.17, -3.75]}
        children={<Label text="校医院"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.材料楼.geometry}
        material={nodes.材料楼.material}
        position={[-2.68, -0.16, 2.51]}
        rotation={[0, 0.2, 0]}
        children={<Label text="材料楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.机电楼.geometry}
        material={nodes.机电楼.material}
        position={[-4.45, -0.16, 1.61]}
        rotation={[0, 0.16, 0]}
        children={<Label text="机电楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.服务大楼.geometry}
        material={nodes.服务大楼.material}
        position={[-0.65, -0.23, 3.44]}
        rotation={[-Math.PI, 1.54, -Math.PI]}
        children={<Label text="服务大楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.昌海楼.geometry}
        material={nodes.昌海楼.material}
        position={[3.48, -0.18, 2.04]}
        rotation={[0, 0.21, 0]}
        children={<Label text="昌海楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.建工楼B区.geometry}
        material={nodes.建工楼B区.material}
        position={[-5.55, -0.16, 1.01]}
        rotation={[0, 0.41, 0]}
        children={<Label text="建工楼B区"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.法学楼.geometry}
        material={nodes.法学楼.material}
        position={[-3.99, -0.1, -1.2]}
        rotation={[0, 0.19, 0]}
        children={<Label text="法学楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.建工楼A区.geometry}
        material={nodes.建工楼A区.material}
        position={[-5.18, -0.16, 1.21]}
        rotation={[0, 0.18, 0]}
        children={<Label text="建工楼A区"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健垃圾场.geometry}
        material={nodes.天健垃圾场.material}
        position={[-1.77, -0.24, 3.68]}
        rotation={[0, 0.14, 0]}
        children={<Label text="天健垃圾场"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["天健园餐厅（九十食堂）"].geometry}
        material={nodes["天健园餐厅（九十食堂）"].material}
        position={[-0.03, -0.14, 3.38]}
        rotation={[0, 0.18, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.工程训练中心2.geometry}
        material={nodes.工程训练中心2.material}
        position={[0.82, -0.08, 2.38]}
        rotation={[0, 0.14, 0]}
        children={<Label text="工程训练中心2"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健30栋.geometry}
        material={nodes.天健30栋.material}
        position={[3.58, 0.06, 3.06]}
        rotation={[0, 0.21, 0]}
        children={<Label text="天健30栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.工程训练中心1.geometry}
        material={nodes.工程训练中心1.material}
        position={[0.36, -0.08, 2.28]}
        rotation={[0, 0.14, 0]}
        children={<Label text="工程训练中心1"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健29栋.geometry}
        material={nodes.天健29栋.material}
        position={[3.17, 0.06, 3.02]}
        rotation={[0, 0.18, 0]}
        children={<Label text="天健29栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健28栋.geometry}
        material={nodes.天健28栋.material}
        position={[2.79, 0.06, 3.13]}
        rotation={[0, 0.19, 0]}
        children={<Label text="天健28栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.安保楼.geometry}
        material={nodes.安保楼.material}
        position={[-1.69, -0.19, 1.63]}
        rotation={[0, 0.16, 0]}
        children={<Label text="安保楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健27栋.geometry}
        material={nodes.天健27栋.material}
        position={[1.09, 0.06, 4.01]}
        rotation={[0, 0.14, 0]}
        children={<Label text="天健27栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健26栋.geometry}
        material={nodes.天健26栋.material}
        position={[0.99, 0.06, 3.34]}
        rotation={[0, 0.14, 0]}
        children={<Label text="天健26栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.学府大道正门.geometry}
        material={materials["Material.001"]}
        position={[0.65, -0.34, -1.16]}
        children={<Label text="学府大道正门"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健25栋.geometry}
        material={nodes.天健25栋.material}
        position={[0.6, 0.06, 3.42]}
        rotation={[0, 0.14, 0]}
        children={<Label text="天健25栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健24栋.geometry}
        material={nodes.天健24栋.material}
        position={[0.69, 0.06, 4.06]}
        rotation={[0, 0.14, 0]}
        children={<Label text="天健24栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健23栋.geometry}
        material={nodes.天健23栋.material}
        position={[0.15, 0.06, 3.98]}
        rotation={[0, 0.14, 0]}
        children={<Label text="天健23栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健22栋.geometry}
        material={nodes.天健22栋.material}
        position={[-0.27, 0.06, 3.9]}
        rotation={[0, 0.13, 0]}
        children={<Label text="天健22栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健21栋.geometry}
        material={nodes.天健21栋.material}
        position={[-0.67, 0.06, 3.84]}
        rotation={[0, 0.13, 0]}
        children={<Label text="天健21栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健20栋.geometry}
        material={nodes.天健20栋.material}
        position={[-1.05, 0.06, 3.77]}
        rotation={[0, 0.14, 0]}
        children={<Label text="天健20栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.天健19栋.geometry}
        material={nodes.天健19栋.material}
        position={[-1.4, 0.06, 3.71]}
        rotation={[0, 0.14, 0]}
        children={<Label text="天健19栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.外经楼.geometry}
        material={nodes.外经楼.material}
        position={[-4.77, -0.16, -1.86]}
        rotation={[0, 0.17, 0]}
        children={<Label text="外经楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.基础实验大楼.geometry}
        material={nodes.基础实验大楼.material}
        position={[-0.78, -0.1, 2.65]}
        rotation={[0, 0.2, 0]}
        children={<Label text="基础实验大楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.地面.geometry}
        material={nodes.地面.material}
        position={[0.57, -0.43, -0.13]}
        children={<Label text="地面"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.图书馆.geometry}
        material={nodes.图书馆.material}
        position={[-0.55, 0.35, 1.56]}
        rotation={[0, 0.18, 0]}
        children={<Label text="图书馆"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.国际学术交流中心.geometry}
        material={nodes.国际学术交流中心.material}
        position={[3.99, -0.08, 1.49]}
        rotation={[Math.PI, -0.21, Math.PI]}
        children={<Label text="国际学术交流中心"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.国际公寓楼.geometry}
        material={nodes.国际公寓楼.material}
        position={[3.94, 0.06, 2.24]}
        rotation={[0, 0.21, 0]}
        children={<Label text="国际公寓楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.嘉言路北门001.geometry}
        material={materials["Material.019"]}
        position={[8.32, -0.17, 0.59]}
        rotation={[Math.PI / 2, 0, -3.06]}
        children={<Label text="嘉言路北门001"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.嘉言路北门.geometry}
        material={materials["Material.019"]}
        position={[5.87, -0.17, 2.34]}
        rotation={[Math.PI / 2, 0, -1.8]}
        children={<Label text="嘉言路北门"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.办公楼.geometry}
        material={nodes.办公楼.material}
        position={[-1.31, -0.16, -1.41]}
        rotation={[Math.PI, -0.99, Math.PI]}
        children={<Label text="办公楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.前湖大道门.geometry}
        material={materials["Material.019"]}
        position={[-8.19, -0.21, -5.63]}
        rotation={[Math.PI / 2, 0, -0.61]}
        children={<Label text="前湖大道门"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.学工楼.geometry}
        material={nodes.学工楼.material}
        position={[-7.41, -0.12, -1.36]}
        rotation={[-Math.PI, 1.38, -Math.PI]}
        children={<Label text="学工楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.六七食堂.geometry}
        material={nodes.六七食堂.material}
        position={[-8.51, -0.19, -2.62]}
        rotation={[-Math.PI, 1.2, -Math.PI]}
        children={<Label text="六七食堂"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.信工楼B区.geometry}
        material={nodes.信工楼B区.material}
        position={[-3.5, -0.14, 2.3]}
        rotation={[0, 0.23, 0]}
        children={<Label text="信工楼B区"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.信工楼E区.geometry}
        material={nodes.信工楼E区.material}
        position={[-4.25, -0.14, 2.47]}
        rotation={[0, 0.23, 0]}
        children={<Label text="信工楼E区"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.体育馆.geometry}
        material={nodes.体育馆.material}
        position={[-3.41, -0.17, -5.74]}
        rotation={[Math.PI, -0.23, Math.PI]}
        children={<Label text="体育馆"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.信工楼C区.geometry}
        material={nodes.信工楼C区.material}
        position={[-3.41, -0.14, 2.68]}
        rotation={[0, 0.23, 0]}
        children={<Label text="信工楼C区"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.信工楼A区.geometry}
        material={nodes.信工楼A区.material}
        position={[-3.5, -0.14, 2.3]}
        rotation={[0, 0.23, 0]}
        children={<Label text="信工楼A区"></Label>}
      />
      <group
        position={[-5.52, -0.23, -5.58]}
        rotation={[Math.PI, -0.01, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle016.geometry}
          material={materials["Playground Ground"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle016_1.geometry}
          material={materials["Football-Playground-mark.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle016_2.geometry}
          material={materials["Football Playground Dark.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle016_3.geometry}
          material={materials["Football Playground Light.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲9栋.geometry}
        material={nodes.休闲9栋.material}
        position={[-7.38, -0.22, -3.47]}
        rotation={[0, 0.19, 0]}
        children={<Label text="休闲9栋"></Label>}
      />
      <group
        position={[-8.52, -0.32, -4.2]}
        rotation={[Math.PI, -0.2, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle014.geometry}
          material={materials["Playground Ground"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle014_1.geometry}
          material={materials["Football-Playground-mark.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle014_2.geometry}
          material={materials["Football Playground Dark.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle014_3.geometry}
          material={materials["Football Playground Light.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲7栋.geometry}
        material={nodes.休闲7栋.material}
        position={[-7.43, -0.21, -1.99]}
        rotation={[0, 0.19, 0]}
        children={<Label text="休闲7栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["休闲6-7连接"].geometry}
        material={nodes["休闲6-7连接"].material}
        position={[-7.27, -0.14, -2.1]}
        rotation={[0, 0.19, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲8栋.geometry}
        material={nodes.休闲8栋.material}
        position={[-7.69, -0.21, -1.95]}
        rotation={[0, 0.19, 0]}
        children={<Label text="休闲8栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲6栋.geometry}
        material={nodes.休闲6栋.material}
        position={[-6.99, -0.21, -2.03]}
        rotation={[0, 0.19, 0]}
        children={<Label text="休闲6栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲4栋.geometry}
        material={nodes.休闲4栋.material}
        position={[-7.7, -0.11, -0.92]}
        rotation={[0, 0.24, 0]}
        children={<Label text="休闲4栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲3栋.geometry}
        material={nodes.休闲3栋.material}
        position={[-6.98, -0.14, -0.07]}
        rotation={[0, 0.2, 0]}
        children={<Label text="休闲3栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲5栋.geometry}
        material={nodes.休闲5栋.material}
        position={[-7.19, -0.2, -2.66]}
        rotation={[0, 0.17, 0]}
        children={<Label text="休闲5栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲1栋.geometry}
        material={nodes.休闲1栋.material}
        position={[-6.17, -0.14, 0.51]}
        rotation={[0, 0.2, 0]}
        children={<Label text="休闲1栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲2栋.geometry}
        material={nodes.休闲2栋.material}
        position={[-6.51, -0.14, 0.58]}
        rotation={[0, 0.2, 0]}
        children={<Label text="休闲2栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲18栋.geometry}
        material={nodes.休闲18栋.material}
        position={[-9.2, -0.12, -3.19]}
        rotation={[-Math.PI, 1.07, -Math.PI]}
        children={<Label text="休闲18栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲17栋.geometry}
        material={nodes.休闲17栋.material}
        position={[-8.84, -0.22, -3.24]}
        rotation={[0, 0.08, 0]}
        children={<Label text="休闲17栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲15栋.geometry}
        material={nodes.休闲15栋.material}
        position={[-8.86, -0.12, -2.56]}
        rotation={[-Math.PI, 1.07, -Math.PI]}
        children={<Label text="休闲15栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.游泳馆.geometry}
        material={nodes.游泳馆.material}
        position={[-7.31, -0.17, -4.83]}
        rotation={[0, 0.49, 0]}
        children={<Label text="游泳馆"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲16栋.geometry}
        material={nodes.休闲16栋.material}
        position={[-8.56, -0.22, -3.25]}
        rotation={[0, 0.08, 0]}
        children={<Label text="休闲16栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲12栋.geometry}
        material={nodes.休闲12栋.material}
        position={[-8.26, -0.22, -3.32]}
        rotation={[0, 0.19, 0]}
        children={<Label text="休闲12栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲14栋.geometry}
        material={nodes.休闲14栋.material}
        position={[-8.51, -0.12, -1.93]}
        rotation={[-Math.PI, 1.07, -Math.PI]}
        children={<Label text="休闲14栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.人文楼.geometry}
        material={nodes.人文楼.material}
        position={[-3.99, -0.1, -1.2]}
        rotation={[0, 0.19, 0]}
        children={<Label text="人文楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲10栋.geometry}
        material={nodes.休闲10栋.material}
        position={[-7.68, -0.22, -3.42]}
        rotation={[0, 0.19, 0]}
        children={<Label text="休闲10栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.一二食堂.geometry}
        material={nodes.一二食堂.material}
        position={[-6.63, -0.21, -0.41]}
        rotation={[0, 0.33, 0]}
        children={<Label text="一二食堂"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["forest.001"]}
        position={[-2.82, -0.29, 1.81]}
        rotation={[0, 0.18, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.map_2osm_roads_service.geometry}
        material={materials["roads_service.001"]}
        position={[0.57, -0.29, -0.13]}
        rotation={[-Math.PI, 1.38, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.慧源楼.geometry}
        material={nodes.慧源楼.material}
        position={[-5.89, -0.19, -0.64]}
        rotation={[0, 0.56, 0]}
        children={<Label text="慧源楼"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[10.32, 0.22, 5.63]}
        rotation={[0, -0.18, 0]}
      />
      <group position={[8.27, -0.38, 2.46]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["Square Grass"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials["Square Grey Stone"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials["Square Brown Stone"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.游泳馆001.geometry}
        material={materials["Swimming Pool Tile Procedural.001"]}
        position={[-7.31, -0.16, -4.83]}
        rotation={[0, 0.49, 0]}
        children={<Label text="游泳馆001"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.休闲11栋.geometry}
        material={nodes.休闲11栋.material}
        position={[-7.96, -0.22, -3.37]}
        rotation={[0, 0.19, 0]}
        children={<Label text="休闲11栋"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.三四食堂.geometry}
        material={nodes.三四食堂.material}
        position={[-7.69, -0.23, -2.77]}
        rotation={[-Math.PI, 1.39, -Math.PI]}
        children={<Label text="三四食堂"></Label>}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.map_2osm_roads_secondary.geometry}
        material={materials["roads_secondary.001"]}
        position={[0.57, -0.29, -0.13]}
        rotation={[-Math.PI, 1.38, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.map_2osm_roads_residential.geometry}
        material={materials["roads_residential.001"]}
        position={[0.57, -0.29, -0.13]}
        rotation={[-Math.PI, 1.38, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.map_2osm_roads_primary.geometry}
        material={materials["roads_primary.001"]}
        position={[0.57, -0.29, -0.13]}
        rotation={[-Math.PI, 1.38, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.map_2osm_forest.geometry}
        material={materials["forest.001"]}
        position={[0.57, -0.3, -0.13]}
        rotation={[-Math.PI, 1.38, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Grid.geometry}
        material={materials["water.001"]}
        position={[8.91, -0.39, 3.08]}
      />
    </group>
  );
}

useGLTF.preload(modelUrl);
