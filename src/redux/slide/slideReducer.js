import {CHANGE_SLIDE_NEXT} from "./slideTypes";
import {CHANGE_SLIDE_PREV} from "./slideTypes";

const initialState = {
 numOfSlide: 0
};

const changeSlideReducer = (state=initialState,action) => {
    switch(action.type){
        case CHANGE_SLIDE_NEXT:{
            if(state.numOfSlide === 3){
                return{
                    ...state,
                    numOfSlide: 0
                }
            }
            return{
            ...state,
            numOfSlide: state.numOfSlide + 1
            }
        }
        case CHANGE_SLIDE_PREV:{
            if(state.numOfSlide === 0){
                return{
                    ...state,
                    numOfSlide: 3
                }
            }
            return{
                ...state,
                numOfSlide: state.numOfSlide - 1
            }
        }
        default: return state
    }
};

export default changeSlideReducer