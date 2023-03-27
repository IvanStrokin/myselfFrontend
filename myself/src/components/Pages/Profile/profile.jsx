import React from 'react'
import s from './profile.module.scss'
import userCard from '../../userCard/userCard'

class Profile extends React.Component {
    render(){
        return(
            <div className={s.wrapper}>
                <div className={s.userCard}>
                <span>
                <div className={s.imgWrap}>
                    <img src = "https://sun9-78.userapi.com/impg/E3ggY_2k6kO5Dv6g1isZzTIBXamQod5B3VeYgA/GmOtYGBaZBs.jpg?size=1200x1600&quality=96&sign=c4d3548251e86f28a4a5a087f054258d&type=album" />
                </div>
                </span>
                <span>
                <div className={s.nameWrap}>
                    <h3>Строкин <br/> Иван</h3>
                    <h6>День рождения 25 ноября</h6>
                </div>
                </span>
                <span>
                <div className={s.desciptionWrap}>
                    <>Дотер студент политеха и другие диагнозы</>
                </div>
                </span>
                </div>
                
            </div>
        )
    }
}

export default Profile