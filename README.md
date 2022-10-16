# NCU 校园地图

https://ncumap.ncuos.com/

## TODOs

- [x] 加载动画
- [x] 字体优化
- [x] 开发文档
- [ ] 细化模型
- [ ] 鸟瞰相机固定轨迹
- [ ] 修复 Roughness
- [ ] 根据定位，在地图上显示当前位置
- [ ] build by 家园工作室
- [ ] 夜景车流
- [ ] 时间系统
- [ ] 天气系统
- [ ] 第三人称行走
- [ ] 第三人称飞行(参考 AER Memories of Old)
- [ ] 寻宝（神秘商店兑换码...)
- [ ] AR/VR

## 开发

### 基本调试
```bash
git clone git@github.com:ncuhome/NCUmap.git
cd NCUmap
yarn
yarn dev
```

### 项目结构
```bash
models # 模型文件夹
├── map.blend # blender 源文件
├── map.blend1 # blender 自动备份副本文件(已忽略)
└── map.glb # 3d模型文件
scripts # 脚本文件夹
├── export_map.py # blender 导出模型前需执行的脚本文件
├── generate_model.py # .glb 文件生成 .tsx 文件后执行额外修改
...
src # 源码文件夹
├── App.tsx
├── ...
...
```

### 模型

Blender 源文件为 `models/map.blend`

导出后的 GLTF 文件为 `models/map.glb`

### 模型导出过程

在 Blender 中修改`map.blend`后，导出前执行 `scripts/export_map.py` 脚本，此脚本会执行如下操作：
1. 将 duplicate linked 物体转换为 duplicate object 物体 （make_single_user）
2. 将每个 Object 的 Origin 位置设置为该模型的最高点。此设置是为了在网页中显示文字时让文字浮与建筑上方
3. 将整体大小缩小为约 30 米。太大规模在导入后不能正常显示
4. 将整体移动到场景原点 (0,0,0)

执行后，不要保存 Blender 文件，直接导出为 GLTF 文件。
导出时按默认选项导出即可（已经调整为合适的设置并记录导出设置）。

### 根据模型生成代码


目前 node v18.10.0 版本会报 `TypeError: Failed to parse URL ...` 建议先降级：
```bash
yarn global add n
n 16
```

将导出的 GLTF 文件保存到 `models/map.glb` 后，执行 `yarn map2tsx` 生成模型代码。
此脚本会执行如下操作：

1. 根据模型[生成](https://github.com/pmndrs/gltfjsx)引用模型所需的代码
2. 执行 `scripts/generate_model.py` 进行所需更改
3. 格式化生成的代码

#### `scripts/generate_model.py` 对生成代码的更改

1. 为有中文名的建筑加上相应的悬浮标签
2. 添加所需的 `import` 
3. 修复地面的大面积阴影问题（删除 `castShadow` 属性）
4. 添加 `BVH` 优化性能
5. 为 `FocusPlane` 手动添加透明材质（由于聚焦全部太远，添加了一个更小的 `FocusPlane` 作为默认的聚焦对象）

所有更改目前均由正则和替换实现。
