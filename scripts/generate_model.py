from calendar import c
import re
import os

codec = 'utf-8'

os.chdir(os.path.dirname(os.path.abspath(__file__)))

with open('../Map.tsx', 'r', encoding=codec) as f:
    s = f.read()

MATCH_JSX = re.compile(r'<mesh(.*?)/>', re.DOTALL)

MATCH_CN = re.compile(r'[\u4e00-\u9fff]+')

MATCH_NAME = re.compile(r'geometry={nodes\.(.+?)\.geometry}')

matches: list[str] = MATCH_JSX.findall(s)

# Add labels for all mesh with Chinese name
for match in matches:
    lines = match.splitlines()

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
    0, '''import modelUrl from "/models/map.glb?url";
import Label from "./Label";''')

# Fix ref error
s = '\n'.join(lines)
s = s.replace("'/map.glb'", 'modelUrl')
s = s.replace('const group = useRef<THREE.Group>()',
              'const group = useRef<THREE.Group>(null)', 1)

# Fix lint
s = s.replace('import React, { useRef } from "react"',
              'import { useRef } from "react"', 1)

# Fix shadow on ground
s = s.replace('''<mesh
        name="floor"
        castShadow''', '''<mesh
        name="floor"''', 1)

with open('../src/Map.tsx', 'w', encoding=codec) as f:
    f.write(s)

os.unlink('../Map.tsx')
