import {CHANGE_SLIDE_NEXT} from "./slideTypes";
import {CHANGE_SLIDE_PREV} from "./slideTypes";

export const changeSlideNext = () => {
  return {
      type: CHANGE_SLIDE_NEXT
  }
};
export const changeSlidePrev = () => {
    return {
        type: CHANGE_SLIDE_PREV
    }
};