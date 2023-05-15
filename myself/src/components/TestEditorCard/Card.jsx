import s from "./Card.module.scss";
import {QuestionContainer} from "./CardQuestion/QuestionContainer";
import {RadioFormContainer} from "./RadioForm/RadioFormContainer";

export const Card = ({cardId, onCreateRadio, onDeleteRadio}) => {

    return (
        <div className={s.cardContainer}>
            <QuestionContainer cardId={cardId} />

            <RadioFormContainer cardId={cardId} />

            <div className={s.buttonContainer}>
                <button className={s.button} onClick={(e) => onCreateRadio(e, cardId)}>
                    Добавить новый вариант ответа
                </button>

                <button className={`${s.button} ${s.delete_button}`} onClick={(e) => onDeleteRadio(e, cardId)}>
                    Удалить карточку с вопросом
                </button>
            </div>

            <p className={s.desc}>* Нажмите на текст вопроса или варианта ответа, чтобы редактировать их</p>
        </div>
    )
}