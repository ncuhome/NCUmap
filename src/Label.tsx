import { Billboard, Text } from "@react-three/drei";
import fontUrl from "/SourceHanSansCN-Regular.otf?url";

interface LabelProps {
  text: string;
  show?: boolean;
  children?: any;
  position: [number, number, number];
}

export default function Label({ text, position }: LabelProps) {
  return (
    <Billboard position={position}>
      <Text
        font={fontUrl}
        color="#1B2430"
        outlineColor={"#D6D5A8"}
        outlineWidth={0.005}
        anchorY={-0.3}
      >
        {text}
      </Text>
    </Billboard>
  );
}
