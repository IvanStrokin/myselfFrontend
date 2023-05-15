import {RadioForm} from "./RadioForm";
import {useDispatch, useSelector} from "react-redux";
import {
    deleteRadio,
    updateRadioCategory,
    updateRadioCategoryWeight,
    updateRadioText
} from "../../../../reducer/RadioSlice";

export const RadioFormContainer = ({cardId}) => {
    const {radios} = useSelector(state => state.radioReducer.cards.find(card => card.id === cardId))
    const {categories} = useSelector(state => state.radioReducer)
    const dispatch = useDispatch()

    const onDeleteRadio = (e, id) => {
        e.preventDefault()
        dispatch(deleteRadio({cardId, id}))
    }

    const onUpdateRadioText = (id, text) => {
        const newText = prompt('Введите новый вариант ответа')
        if (newText !== text && newText !== '' && newText !== null) {
            const payload = {
                cardId,
                id,
                text: newText
            }
            dispatch(updateRadioText(payload))
        }
    }

    const onUpdateRadioCategory = (id, category) => {
        const payload = {
            cardId,
            id,
            category
        }
        dispatch(updateRadioCategory(payload))
    }

    const onUpdateRadioCategoryWeight = (id, categoryWeight) => {
        const payload = {
            cardId,
            id,
            categoryWeight
        }
        dispatch(updateRadioCategoryWeight(payload))
    }

    return (
        <RadioForm
            radios={radios}
            categories={categories}
            onDeleteRadio={onDeleteRadio}
            onUpdateRadioText={onUpdateRadioText}
            onUpdateRadioCategory={onUpdateRadioCategory}
            onUpdateRadioCategoryWeight={onUpdateRadioCategoryWeight}
        />
    )
}