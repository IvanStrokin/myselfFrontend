import {Question} from "./Question";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeQuestionText} from "../../../../reducer/RadioSlice";

export const QuestionContainer = ({cardId}) => {
    const [questionTextInput, setQuestionTextInput] = useState('')
    const {questionText} = useSelector(state => state.radioReducer.cards.find(card => card.id === cardId))
    const [isQuestionChanging, setIsQuestionChanging] = useState(false)

    const dispatch = useDispatch()

    const handleOnBlur = () => {
        if (questionTextInput !== questionText && questionTextInput !== '') {
            dispatch(changeQuestionText({cardId, text: questionTextInput}))
        }
        setIsQuestionChanging(false)
    }

    const onEnterPress = (e) => {
        e.stopPropagation()
        if (e.key === 'Enter') {
            e.target.blur()
        }
    }

    return (
        <Question
            setIsQuestionChanging={setIsQuestionChanging}
            questionText={questionText}
            isQuestionChanging={isQuestionChanging}
            questionTextInput={questionTextInput}
            setQuestionTextInput={setQuestionTextInput}
            handleOnBlur={handleOnBlur}
            onEnterPress={onEnterPress}
        />
    )
}