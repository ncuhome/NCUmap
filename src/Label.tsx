import { Html } from "@react-three/drei";

interface LabelProps {
  text: string;
  show?: boolean;
  children?: any;
}

export default function Label({ text, show = true }: LabelProps) {
  return (
    <Html style={{ width: "50px" }}>
      <label
        htmlFor=""
        style={{ userSelect: "none", display: show ? "inline" : "none" }}
      >
        {text}
      </label>
    </Html>
  );
}
