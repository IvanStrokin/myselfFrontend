import React from 'react'
import s from './Profile.module.scss'
import {UserCard} from "../../UserCard/UserCard";
import { useDispatch, useSelector } from "react-redux";


export default function Profile() {

    const {id} = useSelector(state => state.UserSlice)

    return (
        <div className={s.wrapper}>
            <UserCard id = {id}/>
        </div>
    )
}
