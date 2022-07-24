import EmployeeReducer from "./EmployeeReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    Employee: EmployeeReducer
})

export default RootReducer