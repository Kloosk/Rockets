import {MOVE_TO_DSC,MOVE_TO_MAIN} from "./moveTypes";

export const moveToDsc = () => {
  return{
      type: MOVE_TO_DSC
  }
};
export const moveToMain = () => {
  return{
      type: MOVE_TO_MAIN
  }
};