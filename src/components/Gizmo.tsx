import { GizmoHelper, GizmoViewport } from "@react-three/drei";

export default function Gizmo() {
  return (
    <GizmoHelper
      alignment="bottom-right" // widget alignment within scene
      margin={[80, 80]} // widget margins (X, Y)
      // onUpdate={/* called during camera animation  */}
      // onTarget={/* return current camera target (e.g. from orbit controls) to center animation */}
      // renderPriority={/* use renderPriority to prevent the helper from disappearing if there is another useFrame(..., 1)*/}
    >
      <GizmoViewport axisColors={["red", "green", "blue"]} labelColor="black" />
      {/* alternative: <GizmoViewcube /> */}
    </GizmoHelper>
  );
}
