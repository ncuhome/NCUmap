import create from "zustand";
import { createTrackedSelector } from "react-tracked";

type State = {
  isZoomed: boolean;
  setZoomed: (isZoomed: boolean) => void;
  isJoy:boolean;
  setJoy: (isJoy: boolean) => void;
};

const useStore = create<State>((set) => ({
  isZoomed: false,
  setZoomed: (isZoomed) => set({ isZoomed }),
  isJoy: false,
  setJoy: (isJoy) => set({ isJoy }),
}));
export const useTrackedStore = createTrackedSelector(useStore);
