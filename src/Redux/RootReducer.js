import { combineReducers } from "redux";
import { backgroundColor } from "./backgroundcolor/ColorReducer";
// import { resetColor } from "./backgroundcolor/ColorReducer";

const RootReducer = combineReducers({
    background:backgroundColor,
    // reset:resetColor
})

export default RootReducer