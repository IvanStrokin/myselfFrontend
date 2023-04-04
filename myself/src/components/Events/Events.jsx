import React from "react";
import { pulse, } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import s from './Events.module.scss'


export const Event = (data) => {

    const Pulse = styled.div`animation: .6s ${keyframes`${pulse}`} `
    const user = data.data

    return (

        <div className={s.eventCard}>
            <div className={s.imgWrap}>
                <Pulse><img src={user.avatar} /></Pulse>
            </div>
            <div className={s.textWrap}>
                <div className={s.nameWrap}>
                    <h3><Pulse>{user.first_name} {user.last_name} </Pulse></h3>
                    <Pulse><h6> <br />{user.birthday}</h6></Pulse>
                </div>
                <div className={s.desciptionWrap}>
                    <Pulse>{user.status}</Pulse>
                </div>
            </div>
        </div>
    )
}