import {Html} from '@react-three/drei'

interface LabelProps {
  text: string;
}

export default function Label({ text }: LabelProps) {
  return (
    <Html>
      <label htmlFor="">{text}</label>
    </Html>
  );
}
