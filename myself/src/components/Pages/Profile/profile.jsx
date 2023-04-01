import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import s from './Profile.module.scss'
import {  pulse,  } from 'react-animations';
import { useDispatch, useSelector } from 'react-redux';

const Pulse = styled.div`animation: .6s ${keyframes`${pulse}`} `

export default function Profile() {

        const dispatch = useDispatch()
        const user = useSelector(state => state.userInfo.user)

        return (
            <div className={s.wrapper}>
                <div className={s.userCard}>
                    <span>
                        <div className={s.imgWrap}>
                            <img src="https://sun9-78.userapi.com/impg/E3ggY_2k6kO5Dv6g1isZzTIBXamQod5B3VeYgA/GmOtYGBaZBs.jpg?size=1200x1600&quality=96&sign=c4d3548251e86f28a4a5a087f054258d&type=album" />
                        </div>
                    </span>
                    <span >
                        <div className={s.nameWrap}>
                            <h3><Pulse>{user.firstName} <br /> {user.lastName} </Pulse></h3>
                            <Pulse><h6>Birthday <br />{user.birthday}</h6></Pulse>
                        </div>
                    </span>
                    <span>
                        <div className={s.desciptionWrap}>
                            <Pulse> <>{user.status}</></Pulse>
                        </div>
                    </span>
                </div>
            </div>
        )
}

