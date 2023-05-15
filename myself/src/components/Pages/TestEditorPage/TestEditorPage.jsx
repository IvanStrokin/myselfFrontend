import s from "./TestEditorPage.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {createCard} from "../../../reducer/RadioSlice";
import {CardContainer} from "../../TestEditorCard/CardContainer";

export const TestEditorPage = () => {
    const {cards} = useSelector(state => state.radioReducer)
    const dispatch = useDispatch()

    return (
        <div className={s.container}>
            <button className={s.button} onClick={() => dispatch(createCard())}>
                Создать новую карточку с вопросом
            </button>
            {cards.map(card => {
                return <CardContainer
                    key={card.id}
                    cardId={card.id}
                />
            })}
        </div>
    )
}