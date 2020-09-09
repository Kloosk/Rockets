import {SCROLL_OFF,SCROLL_ON} from "./scrollTypes";

export const scrollOn = () => {
  return{
      type: SCROLL_ON
  }
};
export const scrollOff = () => {
  return{
      type: SCROLL_OFF
  }
};