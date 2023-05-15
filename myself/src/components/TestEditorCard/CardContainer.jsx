import {useDispatch} from "react-redux";
import {Card} from "./Card";
import {createRadio, deleteCard} from "../../reducer/RadioSlice";

export const CardContainer = ({cardId}) => {
    const dispatch = useDispatch()

    const onCreateRadio = (e, cardId) => {
        e.preventDefault()
        const text = prompt('Введите новый вариант ответа')
        if (text !== null && text !== '') {
            dispatch(createRadio({cardId, text}))
        }
    }

    const onDeleteRadio = (e, cardId) => {
        e.preventDefault()
        dispatch(deleteCard(cardId))
    }

    return (
        <Card
            cardId={cardId}
            onCreateRadio={onCreateRadio}
            onDeleteRadio={onDeleteRadio}
        />
    )
}