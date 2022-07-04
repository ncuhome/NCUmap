from mathutils import *
from math import *
import bpy
import re

MATCH_CN = re.compile(r'[\u4e00-\u9fff]+')

bpy.ops.object.select_all(action='DESELECT')

# Set origin to the highest point of the object
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


for obj in bpy.data.objects:
    if obj.type == 'MESH' and MATCH_CN.match(obj.name):
        set_origin_to_upper(obj)

# Select all objects in the scene
bpy.ops.object.select_all(action='SELECT')

# Resize to about 30m. Auto gerenated by blender.
bpy.ops.transform.resize(value=(0.0114582, 0.0114582, 0.0114582),
                         orient_type='GLOBAL',
                         orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)),
                         orient_matrix_type='GLOBAL',
                         mirror=False,
                         use_proportional_edit=False,
                         proportional_edit_falloff='SMOOTH',
                         proportional_size=1,
                         use_proportional_connected=False,
                         use_proportional_projected=False)
bpy.ops.transform.translate(value=(-0, -0, -17.9224),
                            orient_axis_ortho='X',
                            orient_type='GLOBAL',
                            orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)),
                            orient_matrix_type='GLOBAL',
                            constraint_axis=(False, False, True),
                            mirror=False,
                            use_proportional_edit=False,
                            proportional_edit_falloff='SMOOTH',
                            proportional_size=1,
                            use_proportional_connected=False,
                            use_proportional_projected=False)
bpy.ops.transform.resize(value=(0.572726, 0.572726, 0.572726),
                         orient_type='GLOBAL',
                         orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)),
                         orient_matrix_type='GLOBAL',
                         mirror=False,
                         use_proportional_edit=False,
                         proportional_edit_falloff='SMOOTH',
                         proportional_size=1,
                         use_proportional_connected=False,
                         use_proportional_projected=False)
bpy.ops.transform.translate(value=(399.436, -1.71189e-07, -1.27412),
                            orient_axis_ortho='X',
                            orient_type='GLOBAL',
                            orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)),
                            orient_matrix_type='GLOBAL',
                            mirror=False,
                            use_proportional_edit=False,
                            proportional_edit_falloff='SMOOTH',
                            proportional_size=1,
                            use_proportional_connected=False,
                            use_proportional_projected=False)
bpy.ops.transform.translate(value=(1.27412, 66.8912, 0),
                            orient_axis_ortho='X',
                            orient_type='GLOBAL',
                            orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)),
                            orient_matrix_type='GLOBAL',
                            mirror=False,
                            use_proportional_edit=False,
                            proportional_edit_falloff='SMOOTH',
                            proportional_size=1,
                            use_proportional_connected=False,
                            use_proportional_projected=False)

# Apply all modifiers
try:
    bpy.ops.object.convert(target='MESH')
except Exception as e:
    print(e)

# Make all data owned
bpy.ops.object.make_single_user(object=True,
                                obdata=True,
                                material=False,
                                animation=False,
                                obdata_animation=False)

# Apply transforms
bpy.ops.object.transform_apply(location=False, rotation=True, scale=True)

bpy.ops.transform.translate(value=(-384.297, -107.979, 0),
                            orient_axis_ortho='X',
                            orient_type='GLOBAL',
                            orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)),
                            orient_matrix_type='GLOBAL',
                            mirror=False,
                            use_proportional_edit=False,
                            proportional_edit_falloff='SMOOTH',
                            proportional_size=23.2252,
                            use_proportional_connected=False,
                            use_proportional_projected=False)

bpy.ops.transform.translate(value=(-0, -0, -20.1202),
                            orient_axis_ortho='X',
                            orient_type='GLOBAL',
                            orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)),
                            orient_matrix_type='GLOBAL',
                            constraint_axis=(False, False, True),
                            mirror=False,
                            use_proportional_edit=False,
                            proportional_edit_falloff='SMOOTH',
                            proportional_size=23.2252,
                            use_proportional_connected=False,
                            use_proportional_projected=False)
bpy.ops.transform.translate(value=(-0, -0, -48.4323),
                            orient_axis_ortho='X',
                            orient_type='GLOBAL',
                            orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)),
                            orient_matrix_type='GLOBAL',
                            constraint_axis=(False, False, True),
                            mirror=False,
                            use_proportional_edit=False,
                            proportional_edit_falloff='SMOOTH',
                            proportional_size=72.8905,
                            use_proportional_connected=False,
                            use_proportional_projected=False)
