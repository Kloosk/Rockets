import {LIGHT_SUB, LIGHT_ADD, LIGHT_SET} from "./lightTypes";

const initialState = {
  value: 0
};

const lightSetReducer = (state=initialState,action) =>{
  switch(action.type){
      case LIGHT_ADD:{
          return{
          ...state,
          value: state.value+0.5
      }
      }
      case LIGHT_SUB:{
          if(state.value > 0.5){
              return{
                  ...state,
                  value: state.value-0.5
              }
          }
          return state
      }
      case LIGHT_SET:{
          return{
              ...state,
              value: action.value
          }
      }
      default: return state
  }
};

export default lightSetReducer