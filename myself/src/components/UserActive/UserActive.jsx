import s from './UserActive.module.scss'
import React from "react";
import Item from './Item';
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios';


const data = [
    {
        "name": "Spring-Majore",
        "data": "12-05-2023",
        "time": "13:45",
        "imageURL": "https://cdn1.dotesports.com/wp-content/uploads/2018/08/08183254/rh3U5Yh.jpg"
    },
    {
        "name": "Spring-Majore",
        "data": "12-05-2023",
        "time": "23:15",
        "imageURL": "https://cdn1.dotesports.com/wp-content/uploads/2018/08/08183254/rh3U5Yh.jpg"
    },
    {
        "name": "Dota 2 LAN",
        "data": "15-05-2023",
        "time": "10:45",
        "imageURL": "https://cdn1.dotesports.com/wp-content/uploads/2018/08/08183254/rh3U5Yh.jpg"
    },
]



export default function UserActive() {
    return (
        <Carousel> 
            <Carousel.Item>
                <img
                className="d-block w-100"
                scr = "./i.png"
                alt="FirstEvent"
                />
                <h3>{data[0].name}</h3>
                <p>{data[0].data}  at {data[0].time} </p>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                scr = {data[1].imageURL}
                alt="SecondEvent"
                />
                <h3>{data[1].name}</h3>
                <p>{data[1].data}  at {data[1].time} </p>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                scr = {data[2].imageURL}
                alt="ThirdEvent"
                />
                <h3>{data[2].name}</h3>
                <p>{data[2].data}  at {data[2].time} </p>
            </Carousel.Item>
        </Carousel>
    )
}