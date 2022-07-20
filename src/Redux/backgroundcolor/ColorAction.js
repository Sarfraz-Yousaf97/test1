import { BACKGROUND_COLOR } from "./ColorType";
import { RESET_COLOR } from "./ColorType";

export const  background = () => {
    return{
        type:BACKGROUND_COLOR
    }
}

export const  reset = () => {
    return{
        type:RESET_COLOR
    }
}