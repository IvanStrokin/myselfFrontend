import React, { useEffect } from 'react'
import s from './EventsPage.module.scss'
import { useSelector } from 'react-redux';


export default function EventsPage() {



    const user = useSelector(state => state.userInfo.user)

    return (
        <div className={s.wrapper}>
    
        </div>
    )
}