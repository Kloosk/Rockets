import {LOAD_FFF,LOAD_ON} from "./loadingTypes";

export const loadOn = () => {
    return{
        type: LOAD_ON
    }
};
export const loadOff = () => {
    return{
        type: LOAD_FFF
    }
};