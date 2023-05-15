import s from "./Question.module.scss";
import {useEffect, useRef} from "react";

export const Question = ({
                             setIsQuestionChanging,
                             questionText,
                             isQuestionChanging,
                             questionTextInput,
                             setQuestionTextInput,
                             handleOnBlur,
                             onEnterPress
                         }) => {

    const textInputRef = useRef()

    useEffect(() => {
        questionText === 'Место для вашего вопроса...'
            ? setQuestionTextInput('')
            : setQuestionTextInput(questionText)

        textInputRef.current.focus()
    }, [isQuestionChanging])

    return (
        <>
            <p className={s.questionText} onClick={() => setIsQuestionChanging(true)}>
                {questionText}
            </p>
            <input type={isQuestionChanging ? 'text' : 'hidden'}
                   ref={textInputRef}
                   value={questionTextInput}
                   placeholder='Место для вашего вопроса...'
                   onChange={(e) => {
                       setQuestionTextInput(e.target.value)
                   }}
                   onBlur={handleOnBlur}
                   onKeyDown={onEnterPress}
                   className={s.questionInput}
            />
        </>
    )
}