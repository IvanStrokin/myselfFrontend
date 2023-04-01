import React from 'react';


const defaultState = {
    activities  : [
        {
           id : 12,
           name : "football",
           points : 2,
        },  
    ]
}


const userActivities  = (state, action) => {
    switch (action.type){
        case  "GET_USER":
            return {...state, user: state.user}
        case "CHANGE_USER":

        default:
            return defaultState
    }
}


export default userActivities