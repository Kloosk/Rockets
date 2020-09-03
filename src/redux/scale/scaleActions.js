import {SCALE_ADD,SCALE_SET,SCALE_SUB} from "./scaleTypes";

export const scaleAdd = () => {
 return{
     type: SCALE_ADD
 }
};
export const scaleSub = () => {
    return{
        type: SCALE_SUB
    }
};
export const scaleSet = (v=0) => {
    return{
        type: SCALE_SET,
        value: v
    }
};