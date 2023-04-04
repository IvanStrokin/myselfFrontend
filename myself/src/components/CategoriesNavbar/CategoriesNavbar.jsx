import React from "react";
import { NavLink } from "react-router-dom";
import s from './CategoriesNavbar.module.scss'


export const Categories = () => {
    return (
        <div className={s.navWrap} >
            <button></button>
            <NavLink to="/activity/culture"> Культура</NavLink>
            <NavLink to="/activity/sport"> Спорт</NavLink>
            <NavLink to="/activity/medicine"> Медицина</NavLink>
            <NavLink to="/activity/education"> Образование</NavLink>
        </div >
    )
}