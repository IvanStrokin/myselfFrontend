import  {React, useEffect, useState } from 'react'
import s from './Profile.module.scss'
import { useSelector } from 'react-redux';
import { UserCard } from '../../UserCard/UserCard'



export default function Profile() {

    return (
        <div className={s.wrapper}>
            <UserCard />
        </div>
    )
}
