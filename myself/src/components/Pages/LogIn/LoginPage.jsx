import React from "react";
import s from './LoginPage.module.scss'
import {NavLink} from "react-router-dom";


export const LoginPage = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <NavLink to="/profile">Войти пользователю</NavLink>
            </div>

            <div className={s.wrapper}>
                <NavLink to="/profile">Войти HKO</NavLink>
            </div>

            <div className={s.wrapper}>
                <NavLink to="/registration">Регистрация</NavLink>
            </div>
        </div>

    )
}