import  {React} from 'react'
import s from './Profile.module.scss'
import { UserCard } from '../../UserCard/UserCard'
import { useState } from 'react'
import { useSelector } from 'react-redux'


export default function Profile() {
    
    const userId = useSelector()

    return (
        <div className={s.wrapper}>
            <UserCard id = {1}/>
        </div>
    )
}
