import axios from "axios";
import React from "react";
import { pulse, } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import s from './userCard.module.scss'


export const UserCard = (id) => {

    const Pulse = styled.div`animation: .6s ${keyframes`${pulse}`} `
    const baseURL = `http://localhost:8081/users/${1}`

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    const user = post

    return (
        <div className={s.userCard}>
            <div className={s.imgWrap}>
                <Pulse><img src={user.imageUrl} alt="avatar here" /></Pulse>
            </div>

            <div className={s.textWrap}>
                <div className={s.nameWrap}>
                    <h3><Pulse>{user.firstName} {user.lastName} </Pulse></h3>
                    <Pulse><h6>Birthday <br />{user.birthday}</h6></Pulse>
                </div>
                <div className={s.desciptionWrap}>
                    <Pulse>{user.description}</Pulse>
                </div>
            </div>
        </div>
    )
}