import {WAY_TO_MOVE} from "./wayTypes";

const initialState = {
  wayToMove: true
};

const wayToMoveReducer = (state=initialState,action) => {
    switch(action.type){
        case WAY_TO_MOVE: return{
            ...state,
            wayToMove: action.way
        };
        default: return {
            state
        }
    }
};

export default wayToMoveReducer