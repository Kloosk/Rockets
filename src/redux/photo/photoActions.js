import {CHANGE_PHOTO_NUM} from "./photoTypes";

export const changePhotoNum = (id=0) => {
    return{
        type: CHANGE_PHOTO_NUM,
        number: id
    }
};