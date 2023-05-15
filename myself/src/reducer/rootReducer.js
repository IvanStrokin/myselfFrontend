import { combineReducers } from "redux";
import userSlicer from "./userSlicer";


export const rootReducer = combineReducers({
    userId :  userSlicer,
})