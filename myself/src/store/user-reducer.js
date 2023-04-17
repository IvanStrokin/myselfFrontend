import { mainAPI } from "../api/api"

const SET_USER = 'SET_USER'

const defaultState = {}

const setUser = (user) => ({type: SET_USER, user})

const userReducer  = (state = defaultState, action) => {
    switch (action.type){
        case  SET_USER:
            return {...state, user: action.user}
        default:
            return state
    }
}

export const requestUser = (id) => async (dispatch) =>{
    const response = await mainAPI.getUser(id)
    if(response.status === 200){
        dispatch(setUser(response.data))
    }
}

const data = requestUser(0);

console.log(data);

export default userReducer