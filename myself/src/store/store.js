import { createStore , combineReducers,} from "redux";
import userReducer from "./user-reducer";
import { requestUser } from "./user-reducer";
import userActivities from "./user-activities-reducer";
import userActivitiesHistory from "./activities-his";
import {composeWithDevTools} from 'redux-devtools-extension'




const rootReducer = combineReducers(
    {
        userInfo : userReducer,
        userActivities :userActivities,
        userActivHistory: userActivitiesHistory,
    }
)

export const store = createStore(rootReducer, composeWithDevTools)