# NCU 校园地图

https://ncumap.ncuos.com/

## TODOs

- [ ] 加载动画
- [ ] 细化模型
- [ ] 修复 Roughness
- [x] 字体优化
- [ ] 根据定位，在地图上显示当前位置
- [ ] build by 家园工作室
- [ ] 夜景车流
- [ ] 时间系统
- [ ] 天气系统
- [ ] 第三人称游历地图
- [ ] AR/VR
- [ ] 开发文档

## 开发

### 模型

Blender 模型位于 `models/map.blend`

导出后的 GLTF 文件位于 `models/map.glb`

### 模型导出过程

首先，在 Blender 中执行 `scripts/export_map.py` 脚本。此脚本会执行如下操作：

1. 将引用模型转换为拷贝（单用户）
2. 将每个 Object 的 Origin 位置设置为该模型的最高点。此设置是为了在网页中显示文字时让文字浮与建筑上方
3. 将整体大小缩小为约 30 米。太大规模在导入后不能正常显示
4. 将整体移动到中心

执行后，不要保存 Blender 文件，直接导出为 GLTF 文件。
导出时按默认选项导出即可（已经调整为合适的设置并记录导出设置）。

### 根据模型生成代码

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
