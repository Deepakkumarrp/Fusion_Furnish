import { applyMiddleware, legacy_createStore } from "redux";
import { productReducer } from "./productReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    product:productReducer
})
export const  store = legacy_createStore(rootReducer,applyMiddleware(thunk,logger));