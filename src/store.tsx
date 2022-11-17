import create from "zustand";
import { createTrackedSelector } from "react-tracked";
import { XXLookAt, XXPosition, TJLookAt, TJPosition, YXYLookAt, YXYPosition, initPosition } from "./config";

type State = {
  isZoomed: boolean;
  setZoomed: (isZoomed: boolean) => void;
  isJoy: boolean;
  setJoy: (isJoy: boolean) => void;
  lookAt: { x: number; y: number; z: number };
  setLookAt: (lookAt: "" | "XX" | "TJ" | "YXY") => void;
  camPos: { x: number; y: number; z: number };
  labelClass: number;
  setLabelClass: (labelClass: number) => void;
};

const useStore = create<State>((set) => ({
  isZoomed: false,
  setZoomed: (isZoomed) => set({ isZoomed }),
  isJoy: false,
  setJoy: (isJoy) => set({ isJoy }),
  lookAt: { x: 0, y: 0, z: 0 },
  setLookAt: (lookAt) => {
    switch (lookAt) {
      case "XX":
        set({ lookAt: XXLookAt });
        set({ camPos: XXPosition });
        break;
      case "TJ":
        set({ lookAt: TJLookAt });
        set({ camPos: TJPosition });
        break;
      case "YXY":
        set({ lookAt: YXYLookAt });
        set({ camPos: YXYPosition });
        break;
      default:
        set({ lookAt: { x: 0, y: 0, z: 0 } });
        set({ camPos: initPosition });
    }
  },
  /**
   * lookAt 变化时相机位置对应的变化
   */
  camPos: initPosition,
  labelClass: 1,
  setLabelClass: (labelClass) => set({ labelClass }),
}));

export const useTrackedStore = createTrackedSelector(useStore);
