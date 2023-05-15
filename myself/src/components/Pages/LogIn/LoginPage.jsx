import React from "react";
import s from './LoginPage.module.scss'
import { NavLink } from "react-router-dom";



export const LoginPage = () => {
    return (
        <div>
            <div className={s.greatens}>
                <h1>Добро пожаловать на платформу "Я САМ"!</h1>
                <h2>Чтобы продолжить войдите или зарегестрируйтесь</h2>
            </div>
            <NavLink to="/userLogin" className={s.wrapper}> Войти как пользователь </NavLink>

            <NavLink to="/profile" className={s.wrapper}> Войти HKO </NavLink>

            <NavLink to="/registration" className={s.wrapper}>Регистрация</NavLink>
        </div>

    )
}