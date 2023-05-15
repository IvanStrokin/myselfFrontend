import React from "react";
import s from './UserLoginPage.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { setUserId } from "../../../reducer/UserSlice";
import { NavLink } from "react-router-dom";

export const UserLoginPage = () => {

    const { id } = useSelector(state => state.UserSlice)
    const dispatch = useDispatch()

    return (
        <form className={s.wrapper}>
            <label>Введите свой ID</label>
            <input placeholder="ID" onChange={(e) => dispatch(setUserId(e.target.value))} required />
            <NavLink to="/profile"><button>Войти</button> </NavLink>
        </form>
    )
}