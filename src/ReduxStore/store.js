import { combineReducers, createStore } from "redux";
import cartReducer from "../Components/CartPage/CartRedux/cartReducer";



const combinereducers = combineReducers({cartReducer});


export const store = createStore(combinereducers);