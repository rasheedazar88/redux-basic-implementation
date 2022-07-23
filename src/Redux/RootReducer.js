import Reducer from "./Reducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    TodoReducer: Reducer
})

export default RootReducer