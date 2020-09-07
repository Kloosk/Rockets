import {CHANGE_PHOTO_NUM,CHANGE_PHOTO_NEXT,CHANGE_PHOTO_PREV} from "./photoTypes";

export const changePhotoNum = (id=0,num=0) => {
    return{
        type: CHANGE_PHOTO_NUM,
        number: id
    }
};
export const changePhotoNext = (id=0,num=0) => {
    return{
        type: CHANGE_PHOTO_NEXT,
        num: num
    }
};
export const changePhotoPrev = (id=0,num=0) => {
    return{
        type: CHANGE_PHOTO_PREV,
        num: num
    }
};