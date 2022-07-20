import { BACKGROUND_COLOR } from "./ColorType";
import { RESET_COLOR } from "./ColorType";

const initialState = {
    // number:2,
    backgroundColor:'white',
    
}

export const backgroundColor = (state = initialState, action) => {
    switch (action.type) {
        case BACKGROUND_COLOR:
            return{
                ...state,
                backgroundColor:state.backgroundColor = 'black'

            }
            case RESET_COLOR:
                return{
                    ...state,
                    backgroundColor:state.backgroundColor = 'white'
                }
        default: return state
    }
}
