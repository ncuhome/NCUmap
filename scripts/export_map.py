# 运行脚本时，不要隐藏‘湖’，否则导致 Boolean 修改器不生效，地面出错

from mathutils import *
from math import *
import bpy
import re

MATCH_CN = re.compile(r'[\u4e00-\u9fff]+')

def max_z_in_obj(obj):
    max_z = 0
    for v in obj.data.vertices:
        z = (obj.matrix_world @ v.co).z
        if z > max_z:
            max_z = z
    return max_z


def set_origin_to_upper(obj):
    v = (obj.location.x, obj.location.y, max_z_in_obj(obj))
    bpy.context.scene.cursor.location = v
    print(obj.name, v)
    obj.select_set(True)
    bpy.ops.object.origin_set(type='ORIGIN_CURSOR', center='MEDIAN')
    obj.select_set(False)

# To setting Origin without affecting location of linked duplicates,unlink objects
bpy.ops.object.make_single_user(type='ALL', object=True, obdata=True, material=False, animation=False, obdata_animation=False)

# Set objects origin to the highest point of the object
bpy.ops.object.select_all(action='DESELECT')
for obj in bpy.data.objects:
    if obj.type == 'MESH' and MATCH_CN.match(obj.name):
        set_origin_to_upper(obj)


# scale map max width to about 20 meters
bpy.ops.object.select_all(action='SELECT')
bpy.ops.transform.resize(value=(0.03, 0.03, 0.03),
                         orient_type='GLOBAL',
                         orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)),
                         orient_matrix_type='GLOBAL',
                         mirror=False,
                         use_proportional_edit=False,
                         proportional_edit_falloff='SMOOTH',
                         proportional_size=1,
                         use_proportional_connected=False,
                         use_proportional_projected=False)


# translate the map to world's origin
area = bpy.context.area
old_type = area.type
area.type = 'VIEW_3D'
bpy.ops.view3d.snap_cursor_to_center()
bpy.ops.object.select_all(action='SELECT')
bpy.ops.view3d.snap_selected_to_cursor(use_offset=True)
area.type = old_type

