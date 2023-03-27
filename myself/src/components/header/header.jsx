import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.scss'

export const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
               <h2>Я-САМ</h2>
                <div className={s.menu}>
                    <NavLink to="/">Профиль</NavLink>
                    <NavLink to="/activity">История активностей</NavLink>
                    <NavLink to="/events">Лента мероприятий</NavLink>
                    <NavLink to="/LogPage"> Выйти</NavLink>
                </div>  
            </div>
        </div>
    )
}