
const defaultState = {
    user  : {
        id : 0,
        firstName: "Ivan",
        lastName : "Strokin",
        birthday : "25.11.2003",
        status: "Dota player, SamSTU student and another diadnosis"
    }
}

const userReducer  = (state = defaultState, action) => {
    switch (action.type){
        case  "GET_USER":
            return {...state, user: state.user}
        case "CHANGE_USER":

        default:
            return state
    }
}

export default userReducer