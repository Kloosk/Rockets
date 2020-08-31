import {MOVE_UP,MOVE_DOWN} from "./move3dTypes";

const initialState = {
  move: false
};

const move3dReducer = (state=initialState,action) => {
  switch(action.type){
      case MOVE_UP:{
          return{
              ...state,
              move: false
          }
      }
      case MOVE_DOWN:{
          return{
              ...state,
              move: true
          }
      }
      default: return state;
  }
};

export default move3dReducer;