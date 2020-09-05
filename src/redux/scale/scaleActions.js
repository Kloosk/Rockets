import {SCALE_ADD,SCALE_SET,SCALE_SUB} from "./scaleTypes";

export const scaleAdd = (v=0,starship) => {
 return{
     type: SCALE_ADD,
     starship: starship
 }
};
export const scaleSub = (v=0,starship) => {
    return{
        type: SCALE_SUB,
        starship: starship
    }
};
export const scaleSet = (v=0) => {
    return{
        type: SCALE_SET,
        value: v
    }
};