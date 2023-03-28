import React from 'react'
import Diagram from '../../Diagrams/Diagrams'
import History from '../../History/History'
import s from './Activities.module.scss'


class Activities extends React.Component{
    render() {
        return(
            <div className={s.wrapper}>
                
                <div className={s.diagram}>
                    <Diagram/>
                </div>

                <div className={s.history}>
                    <History/>
                </div>
            </div>
        )
    }
}

export default Activities