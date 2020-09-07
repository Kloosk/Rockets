import {CHANGE_PHOTO_NUM,CHANGE_PHOTO_NEXT,CHANGE_PHOTO_PREV} from "./photoTypes";

const initialState = {
  numOfPhoto: 0
};

const changePhotoReducer = (state=initialState,action) => {
    switch(action.type){
        case CHANGE_PHOTO_NUM:{
            return {
                ...state,
                numOfPhoto: action.number
            }
        }
        case CHANGE_PHOTO_NEXT:{
            if(action.num-1 === state.numOfPhoto){
                return {
                    ...state,
                    numOfPhoto: 0
                }
            }
            return {
                ...state,
                numOfPhoto: state.numOfPhoto+1
            }
        }
        case CHANGE_PHOTO_PREV:{
            if(state.numOfPhoto === 0){
                return {
                    ...state,
                    numOfPhoto: action.num-1
                }
            }
            return {
                ...state,
                numOfPhoto: state.numOfPhoto-1
            }
        }
        default: return state
    }
};

export default changePhotoReducer