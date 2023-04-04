import React from "react";
import s from './LoginPage.module.scss'
import { NavLink } from "react-router-dom";
import { Header } from "../../Header/Header";


export const LoginPage = () => {
    return(
        <div className={s.wrapper}>
            <NavLink to="/profile">Войти</NavLink>
        </div>
    )
}