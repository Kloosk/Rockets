import {LOAD_PHOTO_OFF,LOAD_PHOTO_ON} from "./loadPhotoTypes";

export const loadPhotoOn = () => {
    return{
        type: LOAD_PHOTO_ON
    }
};
export const loadPhotoOff = () => {
    return{
        type: LOAD_PHOTO_OFF
    }
};