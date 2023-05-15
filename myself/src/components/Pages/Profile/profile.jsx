import React from 'react'
import s from './profile.module.scss'
import {UserCard} from "../../userCard/userCard";


export default function Profile() {
    
    const userId = useSelector()

    return (
        <div className={s.wrapper}>
            <UserCard id = {1}/>
        </div>
    )
}
