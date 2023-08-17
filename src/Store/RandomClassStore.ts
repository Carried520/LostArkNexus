import { create } from "zustand";
import classData from "../data/classData.json";

const classArray = Object.values(classData);
const getRandomClass = () => {
  return classArray[Math.floor(Math.random() * classArray.length)];
};

type RandomClass = (typeof classArray)[number];

type RandomClassState = {
  randomClass: RandomClass;
};

type RandomClassAction = {
  updateClass: (state: RandomClassState) => void;
};

export const useRandomClass = create<RandomClassState & RandomClassAction>((set) => ({
  randomClass: getRandomClass(),
  updateClass: () => set(() => ({ randomClass: getRandomClass() })),
}));
