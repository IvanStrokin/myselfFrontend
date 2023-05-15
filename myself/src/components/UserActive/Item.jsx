import React from "react";
import s from './UserActive.module.scss'

export default function Item(data){
    return(
        <div>
            <image src={data.image} alt="Here Event Logo"/>
            <div className={s.description}>
                <h3>{data.name}</h3>
                <h4>{data.data}</h4>
            </div>
        </div>  
    )
}