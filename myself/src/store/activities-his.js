const defaultState = {

    sport: [
        {
            id: 1,
            groupId: 1,
            name: 'Футбол',
            point: 22,
        },
        {
            id: 8,
            groupId: 1,
            name: 'Плавание',
            point: 5,
        },
        {
            id: 13,
            groupId: 1,
            name: 'Бег',
            point: 12,
        },
    ],

    culture: [
        {
            id: 4,
            groupId: 4,
            name: 'Опера',
            point: 4,
        },
        {
            id: 11,
            groupId: 4,
            name: 'Балет',
            point: 2,
        },
        {
            id: 22,
            groupId: 4,
            name: 'Драмма',
            point: 5,
        },
        {
            id: 34,
            groupId: 4,
            name: 'Джаз',
            point: 8,
        },
    ],

    medicine: [
        {
            id: 21,
            groupId: 3,
            name: 'Йога',
            point: 8,
        },
        {
            id: 21,
            groupId: 3,
            name: 'Массаж',
            point: 4,
        },
        {
            id: 21,
            groupId: 3,
            name: 'Иглоукалывание',
            point: 11,
        },
    ],

    education: [
        {
            id: 5,
            groupId: 2,
            name: 'Программирование',
            point: 8,
        },
        {
            id: 6,
            groupId: 2,
            name: 'Математика',
            point: 4,
        },
        {
            id: 6,
            groupId: 2,
            name: 'Физика',
            point: 12,
        },
    ],

    
}



const userActivitiesHistory = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_ACTIVITIES_HISTORY":
            return { ...state, activities: state.activities }

        default:
            return state
    }
}


export default userActivitiesHistory