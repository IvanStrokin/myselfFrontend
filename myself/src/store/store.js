import { createStore , combineReducers,} from "redux";
import userReducer from "./user-reducer";
import userActivities from "./user-activities-reducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers(
    {
        userInfo : userReducer,
        userActivities :userActivities,
    }
)

export const store = createStore(rootReducer, composeWithDevTools)