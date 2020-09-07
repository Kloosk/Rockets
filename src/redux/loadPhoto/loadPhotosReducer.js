import {LOAD_PHOTO_ON,LOAD_PHOTO_OFF} from "./loadPhotoTypes";

const initialState = {
  loadingPhoto: false
};
const loadPhotoReducer = (state=initialState,action) => {
    switch(action.type){
        case LOAD_PHOTO_ON: {
            return{
                ...state,
                loadingPhoto: true
            }
        }
        case LOAD_PHOTO_OFF: {
            return{
                ...state,
                loadingPhoto: false
            }
        }
        default: return state
    }
};

export default loadPhotoReducer