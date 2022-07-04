import create from "zustand";
import { createTrackedSelector } from "react-tracked";
import * as THREE from "three";

type State = {
  camera: THREE.Camera
  scene: THREE.Scene
  setCamera:(camera:THREE.Camera) => void;
  setScene:(scene:THREE.Scene) => void;
  isCameraChanged: boolean;
  setCameraChanged: (isCameraChanged: boolean) => void;
  selectedObjects:any[]
  setSelectedObjects: (selectedObjects:any[]) => void;
};

const useStore = create<State>((set) => ({
  camera:new THREE.Camera,
  scene:new THREE.Scene,
  setCamera: (camera: THREE.Camera) => set({camera}),
  setScene: (scene: THREE.Scene) => set({scene}),
  isCameraChanged: false,
  setCameraChanged: (isCameraChanged) => set({ isCameraChanged }),
  selectedObjects:[],
  setSelectedObjects: (selectedObjects) => set({selectedObjects})
}));
export const useTrackedStore = createTrackedSelector(useStore);
