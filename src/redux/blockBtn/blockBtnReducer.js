import {BLOCK_BTN,UNBLOCK_BTN} from "./blockBtnTypes";

const initialState = {
    block: false
};

const blockBtnReducer = (state=initialState,action) => {
  switch(action.type){
      case BLOCK_BTN:{
          return{
              ...state,
              block: true
          }
      }
      case UNBLOCK_BTN:{
          return{
              ...state,
              block: false
          }
      }
      default: return state
  }
};

export default blockBtnReducer