import { Html } from "@react-three/drei";

interface LabelProps {
  text: string;
}

export default function Label({ text }: LabelProps) {
  return (
    <Html style={{ width: "50px" }}>
      <label htmlFor="" style={{ userSelect: "none" }}>
        {text}
      </label>
    </Html>
  );
}
