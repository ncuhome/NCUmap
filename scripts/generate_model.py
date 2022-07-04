import re
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

with open('../src/Map.tsx', 'r') as f:
    s = f.read()

MATCH_JSX = re.compile(r'<mesh(.*?)/>', re.DOTALL)

MATCH_CN = re.compile(r'[\u4e00-\u9fff]+')

MATCH_NAME = re.compile(r'geometry={nodes\.(.+?)\.geometry}')

matches: list[str] = MATCH_JSX.findall(s)

# Add labels for all mesh with Chinese name
for match in matches:
    lines = match.splitlines()
    print(lines, '\n')

    name = MATCH_NAME.search(match)
    if name:
        name = name.group(1)
        if MATCH_CN.search(name):
            name = name.replace('"', r'\"')
            lines.insert(
                -1, f'''
        children={{<Label text="{name}"></Label>}}''')
            s = s.replace(match, '\n'.join(lines), 1)

lines = s.splitlines()

# Add import for gltf file
lines.insert(
    0, '''import modelUrl from "/map.glb?url";
import Label from "./Label";''')
lines = [line.replace('"/map.glb"', 'modelUrl') for line in lines]

# Fix ref error
s = '\n'.join(lines)
s = s.replace('const group = useRef<THREE.Group>();',
              'const group = useRef<THREE.Group>(null);', 1)

# Fix lint
s = s.replace('import React, { useRef } from "react";',
              'import { useRef } from "react";', 1)

with open('../src/Map.tsx', 'w') as f:
    f.write(s)
