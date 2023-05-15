import s from "./TestingPage.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {createCard} from "../../../reducer/RadioSlice";
import {CardContainer} from "../TestCard/CardContainer";

export const TestingPage = () => {
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