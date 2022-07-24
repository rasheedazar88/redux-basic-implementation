import { applyMiddleware, createStore } from "redux";
import RootReducer from "../Reducer/RootReducer";
import logger from 'redux-logger'
const store = createStore(RootReducer, applyMiddleware(logger))

export default store