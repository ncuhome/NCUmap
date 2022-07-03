import create from "zustand";
import { createTrackedSelector } from "react-tracked";

type State = {
  isCameraChanged: boolean;
  setCameraChanged: (isCameraChanged: boolean) => void;
};

const useStore = create<State>((set) => ({
  isCameraChanged: false,
  setCameraChanged: (isCameraChanged) => set({ isCameraChanged }),
}));
export const useTrackedStore = createTrackedSelector(useStore);
