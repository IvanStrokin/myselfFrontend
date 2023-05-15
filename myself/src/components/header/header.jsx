import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.scss'

export const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
               <h1>Я-САМ</h1>
                <div className={s.menu}>
                    <NavLink to="/profile">Профиль</NavLink>
                    <NavLink to="/activity">История активностей</NavLink>
                    <NavLink to="/events">Лента мероприятий</NavLink>
                    <NavLink to="/testing"> Пройти тест</NavLink>
                    <NavLink to="/"> Выйти</NavLink>
                </div>  
            </div>
        </div>
    )
}