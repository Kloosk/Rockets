import {SCALE_SET,SCALE_SUB,SCALE_ADD} from "./scaleTypes";

const initialState = {
    value: 0
};

const scaleSetReducer = (state=initialState,action) => {
    switch (action.type) {
        case SCALE_ADD:{
            if(action.starship){
                return{
                    ...state,
                    value: state.value+0.01
                }
            }
            return{
                ...state,
                value: state.value+0.5
            }
        }
        case SCALE_SUB:{
            if(action.starship && state.value > 0.01){
                return{
                    ...state,
                    value: state.value-0.01
                }
            }
            if(state.value > 1){
                return{
                    ...state,
                    value: state.value-0.5
                }
            }
            return state
        }
        case SCALE_SET:{
            return{
                ...state,
                value: action.value
            }
        }
        default: return state

    }
};

export default scaleSetReducer;