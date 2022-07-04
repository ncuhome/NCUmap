import { Billboard, Text } from "@react-three/drei";
import fontUrl from "/SourceHanSansCN-Regular.otf?url";

interface LabelProps {
  text: string;
  show?: boolean;
  children?: any;
}

export default function Label({ text }: LabelProps) {
  return (
    <Billboard>
      <Text
        font={fontUrl}
        color="#ff0000"
        outlineColor={"#00ff00"}
        outlineWidth={0.005}
      >
        {text + "\n\n\n\n\n\n"}
      </Text>
    </Billboard>
  );
}
