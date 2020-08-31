import {MOVE_TO_MAIN,MOVE_TO_DSC} from "./moveTypes";

const initialState = {
  move: false
};

const moveToReducer = (state=initialState,action) => {
    switch(action.type){
        case MOVE_TO_DSC:{
            return {
                ...state,
                move: true
            }
        }
        case MOVE_TO_MAIN:{
            return{
                ...state,
                move: false
            }
        }
        default: return state
    }
};

export default moveToReducer;