import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Events.module.scss'


data = [
    {
        name : " Забег",

    }

]

export const Card = () => {
    return(
        <NavLink  className={s.wrapper}>
            <div className={s.imgWrap}>
            </div>
            <div className={s.content}>
                <span>
                    <h1 className={s.name}>{data.name}</h1>
                    <p className={s.status}>
                        <span>{data.status}-{data.species}</span>
                    </p>
                </span>
                <p className={s.location}>
                    <span>Last known location:</span>
                    <p>{data.location.name}</p>
                </p>
                <p className={s.episode}>
                    <span>Fist seen in:</span>
                    <p>Mortynight Run</p>
                </p>
            </div>
        </NavLink>
    )
}