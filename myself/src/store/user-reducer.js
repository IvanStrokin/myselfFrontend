
const defaultState = {
    user  : {
        id: 2,
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
        birthday: "26 apr 2001",
        status : "Really like socer and swimming"
    }
}

const userReducer  = (state = defaultState, action) => {
    switch (action.type){
        case  "SET_USER":
            return {...state, user: action.user}
        default:
            return state
    }
}



export default userReducer