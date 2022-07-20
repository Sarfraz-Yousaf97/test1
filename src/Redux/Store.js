import { createStore,applyMiddleware } from "redux";
import { backgroundColor } from "./backgroundcolor/ColorReducer";
import thunk from 'redux-thunk'
import RootReducer from "./RootReducer";

const  store = createStore(RootReducer,applyMiddleware(thunk))


export default store