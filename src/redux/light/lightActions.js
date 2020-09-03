import {LIGHT_ADD, LIGHT_SET, LIGHT_SUB} from "./lightTypes";

export const lightAdd = () => {
  return{
      type: LIGHT_ADD,
  }
};
export const lightSub = () => {
    return{
        type: LIGHT_SUB,
    }
};
export const lightSet = (v=0) => {
  return{
      type: LIGHT_SET,
      value: v
  }
};