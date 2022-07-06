from mathutils import *
from math import *
import bpy
import re

MATCH_CN = re.compile(r'[\u4e00-\u9fff]+')


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


bpy.ops.object.select_all(action='DESELECT')
for obj in bpy.data.objects:
    if obj.type == 'MESH' and MATCH_CN.match(obj.name):
        set_origin_to_upper(obj)

bpy.ops.object.select_all(action='SELECT')
bpy.ops.transform.resize(value=(0.0325174, 0.0325174, 0.0325174),
                         orient_type='GLOBAL',
                         orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)),
                         orient_matrix_type='GLOBAL',
                         mirror=False,
                         use_proportional_edit=False,
                         proportional_edit_falloff='SMOOTH',
                         proportional_size=1,
                         use_proportional_connected=False,
                         use_proportional_projected=False)
bpy.ops.transform.translate(value=(207.095, -1.98522e-06, -14.7755),
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
bpy.ops.transform.translate(value=(-3.93219, 68.8729, 0),
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
bpy.ops.transform.resize(value=(0.379003, 0.379003, 0.379003),
                         orient_type='GLOBAL',
                         orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)),
                         orient_matrix_type='GLOBAL',
                         mirror=False,
                         use_proportional_edit=False,
                         proportional_edit_falloff='SMOOTH',
                         proportional_size=1,
                         use_proportional_connected=False,
                         use_proportional_projected=False)
bpy.ops.transform.resize(value=(0.66837, 0.66837, 0.66837),
                         orient_type='GLOBAL',
                         orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)),
                         orient_matrix_type='GLOBAL',
                         mirror=False,
                         use_proportional_edit=False,
                         proportional_edit_falloff='SMOOTH',
                         proportional_size=1,
                         use_proportional_connected=False,
                         use_proportional_projected=False)
bpy.ops.transform.translate(value=(8.341, 6.91112, 0),
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
bpy.ops.transform.translate(value=(0.0445476, 4.18975e-08, -0.311833),
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
bpy.ops.transform.translate(value=(-195.173, -112.844, 0),
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
bpy.ops.transform.translate(value=(-4.79805e-14, -5.96919, -216.085),
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
bpy.ops.transform.translate(value=(-1.54885e-15, 3.23857, -6.97539),
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
