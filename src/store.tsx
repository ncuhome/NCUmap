import create from "zustand";
import { createTrackedSelector } from "react-tracked";

type State = {
  isZoomed: boolean;
  setZoomed: (isZoomed: boolean) => void;
  loaded: boolean;
  setLoaded: (loaded: boolean) => void;
  isCameraChanged: boolean;
  setCameraChanged: (isCameraChanged: boolean) => void;
};

const useStore = create<State>((set) => ({
  isZoomed: false,
  setZoomed: (isZoomed) => set({ isZoomed }),
  loaded: false,
  setLoaded: (loaded) => set({ loaded }),
  isCameraChanged: false,
  setCameraChanged: (isCameraChanged) => set({ isCameraChanged }),
}));
export const useTrackedStore = createTrackedSelector(useStore);
