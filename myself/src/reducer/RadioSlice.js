import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    cards: [
        {
            id: nanoid(),
            questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloremque ea mollitia nam nemo odio perferendis!',
            radios: [
                {id: nanoid(), text: 'Radio 1', category: null, categoryWeight: 0},
                {id: nanoid(), text: 'Radio 2', category: null, categoryWeight: 0},
                {id: nanoid(), text: 'Radio 3', category: null, categoryWeight: 0},
                {id: nanoid(), text: 'Radio 4', category: null, categoryWeight: 0},
            ],
        },

        {
            id: nanoid(),
            questionText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloremque ea mollitia nam nemo odio perferendis!',
            radios: [
                {id: nanoid(), text: 'Radio 1', category: null, categoryWeight: 0},
                {id: nanoid(), text: 'Radio 2', category: null, categoryWeight: 0},
                {id: nanoid(), text: 'Radio 3', category: null, categoryWeight: 0},
                {id: nanoid(), text: 'Radio 4', category: null, categoryWeight: 0},
            ],
        }
    ],

    categories: [
        {value: 'Football', label: 'Футбол'},
        {value: 'Basketball', label: 'Баскетбол'},
        {value: 'Tennis', label: 'Теннис'},
        {value: 'Football', label: 'Футбол'},
        {value: 'Football', label: 'Футбол'},
        {value: 'Football', label: 'Футбол'},
        {value: 'Football', label: 'Футбол'},
    ]
}

export const radioSlice = createSlice({
    name: 'radio',
    initialState: initialState,
    reducers: {
        createCard: (state) => {
            state.cards.push({
                id: nanoid(),
                questionText: 'Место для вашего вопроса...',
                radios: []
            })
        },

        deleteCard: (state, action) => {
            state.cards = state.cards.filter(card => {
                return card.id !== action.payload
            })
        },

        createRadio: (state, action) => {
            const currentCard = state.cards.find(card => card.id === action.payload.cardId)
            currentCard.radios.push({id: nanoid(), text: action.payload.text, category: null, categoryWeight: 0})
        },

        deleteRadio: (state, action) => {
            const currentCard = state.cards.find(card => card.id === action.payload.cardId)
            currentCard.radios = currentCard.radios.filter(radio => {
                return radio.id !== action.payload.id
            })
        },

        updateRadioText: (state, action) => {
            const currentCard = state.cards.find(card => card.id === action.payload.cardId)
            const currentRadio = currentCard.radios.find(radio => radio.id === action.payload.id)
            currentRadio.text = action.payload.text
        },

        updateRadioCategory: (state, action) => {
            const currentCard = state.cards.find(card => card.id === action.payload.cardId)
            const currentRadio = currentCard.radios.find(radio => radio.id === action.payload.id)
            currentRadio.category = action.payload.category
        },

        updateRadioCategoryWeight: (state, action) => {
            const currentCard = state.cards.find(card => card.id === action.payload.cardId)
            const currentRadio = currentCard.radios.find(radio => radio.id === action.payload.id)
            currentRadio.categoryWeight = action.payload.categoryWeight
        },

        changeQuestionText: (state, action) => {
            const currentCard = state.cards.find(card => card.id === action.payload.cardId)
            currentCard.questionText = action.payload.text
        },
    }
})

export default radioSlice.reducer
export const {
    createCard,
    deleteCard,
    createRadio,
    changeQuestionText,
    updateRadioText,
    updateRadioCategory,
    updateRadioCategoryWeight,
    deleteRadio
} = radioSlice.actions