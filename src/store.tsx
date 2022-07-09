import create from "zustand";
import { createTrackedSelector } from "react-tracked";

type State = {
  isZoomed: boolean;
  setZoomed: (isZoomed: boolean) => void;
};

const useStore = create<State>((set) => ({
  isZoomed: false,
  setZoomed: (isZoomed) => set({ isZoomed }),
}));
export const useTrackedStore = createTrackedSelector(useStore);
