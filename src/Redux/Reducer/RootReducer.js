import EmployeeReducer from "./EmployeeReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    Employees_Data: EmployeeReducer
})

export default RootReducer