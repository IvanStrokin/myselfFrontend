import React from 'react'
import s from './profile.module.scss'
import {useSelector} from "react-redux";
import {UserCard} from "../../userCard/userCard";


export default function Profile() {

    const {id} = useSelector(state => state.UserSlice)

    return (
        <div className={s.wrapper}>
            <UserCard id = {id}/>
        </div>
    )
}
