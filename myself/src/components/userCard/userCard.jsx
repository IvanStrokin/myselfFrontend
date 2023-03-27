import React from 'react'
import s from './userCard.module.scss'


class userCard extends React.Component {
    render(){
        return(
            <div className={s.wrapper}>
                <span>
                <div className={s.imgWrap}>
                    <img src = "" alt=""/>
                </div>
                </span>
                <span>
                <div className={s.nameWrap}>
                    <h3>Строкин  Иван</h3>
                </div>
                </span>
                <span>
                <div className={s.desciptionWrap}>
                    <>Дотер студент политеха и другие диагнозы</>
                </div>
                </span>
            </div>
        )
    }
}

export default userCard