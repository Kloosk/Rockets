import {BLOCK_BTN,UNBLOCK_BTN} from "./blockBtnTypes";

export const blockBtn = () => {
  return{
      type: BLOCK_BTN
  }
};
export const unblockBtn = () => {
    return{
        type: UNBLOCK_BTN
    }
};