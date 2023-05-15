import {useSelector} from "react-redux";
import s from "./Card.module.scss";
import {useState} from "react";

export const Card = ({cardId}) => {
    const {questionText} = useSelector(state => state.radioReducer.cards.find(card => card.id === cardId))
    const {radios} = useSelector(state => state.radioReducer.cards.find(card => card.id === cardId))
    const [radioValue, setRadioValue] = useState(null)

    const handleRadioValueChange = (e) => {
        setRadioValue(e.target.value)
    }

    return (
        <div className={s.formContainer}>
            <p className={s.questionText}>
                {questionText}
            </p>

            <form>
                {radios.map(r => {
                    return <div key={r.id}>
                        <input type="radio"
                               value={r.id}
                               name={r.id}
                               checked={radioValue === r.id}
                               onChange={handleRadioValueChange}
                               style={{marginLeft: '0.5rem'}}
                        />

                        <label htmlFor={r.id} className={s.radioText}>{r.text}</label>
                    </div>

                })}
            </form>
        </div>

    )
}