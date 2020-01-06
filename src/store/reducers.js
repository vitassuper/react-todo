import { combineReducers } from "redux";
import { todoReducer } from "./todo/reducers";

export default combineReducers({
    todo: todoReducer
});