import {SCROLL_ON,SCROLL_OFF} from "./scrollTypes";

const initialState = {
  scroll: false
};

const scrollReducer = (state=initialState,action) => {
  switch(action.type){
      case SCROLL_ON:{
          return{
              ...state,
              scroll: true
          }
      }
      case SCROLL_OFF:{
          return{
              ...state,
              scroll: false
          }
      }
      default: return state
  }

};


export default scrollReducer