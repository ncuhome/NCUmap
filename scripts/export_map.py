from mathutils import *
from math import *
import bpy

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

# Apply all transforms
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

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
