import React, { useEffect } from 'react'
import s from './EventsPage.module.scss'
import { useSelector } from 'react-redux';
import { Event } from '../../Events/Events';


export default function EventsPage() {

    const user = useSelector(state => state.userInfo.user)

    return (
        <div className={s.wrapper}>
            <Event data={user} />
        </div>
    )
}