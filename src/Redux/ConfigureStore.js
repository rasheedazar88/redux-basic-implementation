import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store