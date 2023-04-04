import React, { useEffect } from 'react'
import s from './Profile.module.scss'
import { useSelector } from 'react-redux';
import { UserCard } from '../../UserCard/UserCard'



export default function Profile() {

    const user = useSelector(state => state.userInfo.user)

    return (
        <div className={s.wrapper}>
            <UserCard data={user} />
        </div>
    )
}
