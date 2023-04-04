

const defaultState = {

    activities  : [
        {
           id : 0,
           name : 'Культура',
           points : 2,
        },  
        {
            id : 1,
            name : 'Образование',
            points : 4,
         }, 
         {
            id : 2,
            name : 'Спорт',
            points : 6,
         }, 
         {
            id : 3,
            name : 'Здоровье',
            points : 5,
         }, 
    ]
}


const userActivities  = (state = defaultState, action) => {
    switch (action.type){
        case  "GET_ACTIVITIES":
            return {...state, activities: state.activities}

        default:
            return state
    }
}


export default userActivities