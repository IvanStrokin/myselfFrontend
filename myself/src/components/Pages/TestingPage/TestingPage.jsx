import React from "react";
import s from "./TestingPage.module.scss";
import {useSelector} from "react-redux";
import {Card} from "../../TestCard/Card";

export const TestingPage = () => {
    const {cards} = useSelector(state => state.radioReducer)

    return (
        <div className={s.container}>
            {cards.map(card => {
                return <Card
                    key={card.id}
                    cardId={card.id}
                />
            })}
            <button type='submit' className={s.submitBtn}>Завершить тест</button>
        </div>
    )
}