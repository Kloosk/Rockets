import {MOVE_DOWN,MOVE_UP} from "./move3dTypes";

export const moveDown = () => {
    return {
        type: MOVE_DOWN
    }
};
export const moveUp = () => {
  return {
      type: MOVE_UP
  }
};