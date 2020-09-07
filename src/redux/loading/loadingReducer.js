import {LOAD_ON,LOAD_FFF} from "./loadingTypes";

const initialState = {
  loading: false
};

const loadReducer = (state=initialState,action) => {
    switch (action.type) {
        case LOAD_ON:{
            return{
                ...state,
                loading: true
            }
        }
        case LOAD_FFF:{
            return{
                ...state,
                loading: false
            }
        }
        default: return state
    }
};

export default loadReducer