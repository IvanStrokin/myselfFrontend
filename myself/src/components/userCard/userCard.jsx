import React from "react";
import { pulse, } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import s from './userCard.module.scss'
import { useGetUserByIdQuery, } from "../../api/api";



export const UserCard = (id) => {


    const { data = {}, isLoading } = useGetUserByIdQuery(id.id);

    const Pulse = styled.div`animation: .6s ${keyframes`${pulse}`} `

    if (isLoading) return (<h1 className={s.desciptionWrap}>Loading...</h1>)

    return (
        <div className={s.userCard}>
            <div className={s.imgWrap}>
                <Pulse><img src={data.imageUrl} alt="avatar here" /></Pulse>
            </div>

            <div className={s.textWrap}>
                <div className={s.nameWrap}>
                    
                    <h3><Pulse>{data.firstName} {data.lastName} </Pulse></h3>
                    <Pulse><h6>Birthday <br />{data.birthday}</h6></Pulse>
                </div>
                <div className={s.desciptionWrap}>
                    <Pulse>{data.description}</Pulse>
                </div>
                
            </div>
            
        </div>
    )
}