from calendar import c
import re
import os

codec = 'utf-8'

os.chdir(os.path.dirname(os.path.abspath(__file__)))

with open('../Map.js', 'r', encoding=codec) as f:
    s = f.read()

MATCH_JSX = re.compile(r'<mesh.*?/>', re.DOTALL)

MATCH_CN = re.compile(r'[\u4e00-\u9fff]+')

MATCH_NAME = re.compile(r'name="(.+?)"')

MATCH_POSITION = re.compile(r'position={(.+?)}')

matches: list[str] = MATCH_JSX.findall(s)

# Add labels for all mesh with Chinese name
for match in matches:

    name = MATCH_NAME.search(match)
    if name:
        name = name.group(1)
        if MATCH_CN.search(name):
            lines = match.splitlines()
            name = name.replace('"', '')
            position = MATCH_POSITION.search(match).group(1)
            lines.append(f'<Label text="{name}" position={{{position}}} />')
            s = s.replace(match, '\n'.join(lines), 1)

lines = s.splitlines()

# Add import for gltf file
lines.insert(
    0, '''import modelUrl from "/models/map.glb?url";
import Label from "./Label";
import { MeshStandardMaterial } from "three";''')

# Fix ref error
s = '\n'.join(lines)
s = s.replace("'/map.glb'", 'modelUrl')
s = s.replace('const group = useRef()',
              'const group = useRef<THREE.Group>(null)', 1)

s = s.replace('const { nodes, materials } = useGLTF(modelUrl)',
              'const { nodes, materials } = useGLTF(modelUrl) as any', 1)
# Fix lint
s = s.replace('import React, { useRef } from', 'import { useRef } from', 1)

# Fix shadow on ground
s = s.replace('''<mesh
        name="grassFloor"
        castShadow''', '''<mesh
        name="grassFloor"''', 1)
s = s.replace('''<mesh
        name="grassFloor001"
        castShadow''', '''<mesh
        name="grassFloor001"''', 1)

# Add refs to meshs
s = s.replace('<mesh','''<mesh
        ref={mesh}''')
# UseBVH
s = s.replace("import { useGLTF } from '@react-three/drei'",'import { useBVH, useGLTF } from "@react-three/drei";',1)
s = s.replace('''const group = useRef<THREE.Group>(null)''',
'''const group = useRef<THREE.Group>(null);
   const mesh = useRef<THREE.Mesh>(null);
   useBVH(mesh as any)''',1)

#Make FocusPlane transparent
s = s.replace('''        geometry={nodes.FocusPlane.geometry}
        material={materials.FocusPlane}''','''geometry={nodes.FocusPlane.geometry}
        material={new MeshStandardMaterial({transparent:true,opacity:0})}''')

with open('../src/Map.tsx', 'w', encoding=codec) as f:
    f.write(s)

os.unlink('../Map.js')
