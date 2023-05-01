import  {React} from 'react'
import s from './Profile.module.scss'
import { UserCard } from '../../UserCard/UserCard'



export default function Profile() {

    return (
        <div className={s.wrapper}>
            <UserCard id = {1}/>
        </div>
    )
}
