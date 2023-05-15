import { useState } from 'react';
import React  from "react";
import s from './Registre.module.scss'
import { useCreateUserMutation } from '../../../api/api';
import { Link, NavLink } from "react-router-dom";

export const EditUser = () => {

    const male = "мужской"
    const female = "женский"

    const [dataState] = useState(
        {
            "firstName": "",
            "lastName": "",
            "patronymic": "",
            "sex": "",
            "birthday": "",
            "description": "",
            "imageUrl": ""
        }
    )

    const [createUser] = useCreateUserMutation()

    const registration = () => {
        createUser(dataState).unwrap().then(() => {
        
        })
        .catch(() =>
         console.log("Error")
        );
    }

    return (
        <div className={s.wrapper}>
            <form>
                <input placeholder="Имя" onChange={(e) => dataState.firstName = e.target.value} required/>
                <input placeholder="Фамилия" onChange={(e) => dataState.lastName = e.target.value} required/>
                <input placeholder="Отчество"onChange={(e) => dataState.patronymic = e.target.value}/>
                <input placeholder="Дата рождения" type="date" onChange={(e) => dataState.birthday = e.target.value}/>
                <input placeholder="Кортко о себе" onChange={(e) => dataState.description = e.target.value}/>
                <input placeholder="Ссылка на фото профиля" onChange={(e) => dataState.imageUrl = e.target.value}/>
                <br/>
                <input type="radio" id="Male" name="sex" onClick={() => dataState.sex = male}/>
                <label htmlFor="Male">Мужской</label>
                <input type="radio" id="Female" name="sex" onClick={() => dataState.sex = female}/>
                <label htmlFor="Female">Женский</label>
                <br/>
              <NavLink to="/" > <button type="button" onClick={() => registration()}>Зарегестрироваться</button></NavLink>  
            </form>
        </div>
    )

    
}
