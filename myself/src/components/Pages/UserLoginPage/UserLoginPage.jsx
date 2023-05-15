import React from "react";
import s from './UserLoginPage.module.scss'
import { useDispatch, useSelector } from "react-redux";


export const UserLoginPage = () => {

    const id = useSelector(state => state.toolkit.id)
    const dispatch = useDispatch()

    return (
        <div>

        </div>
    )
}