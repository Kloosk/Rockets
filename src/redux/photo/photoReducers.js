import {CHANGE_PHOTO_NUM} from "./photoTypes";

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
        default: return state
    }
};

export default changePhotoReducer