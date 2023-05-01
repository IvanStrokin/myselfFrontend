import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import {
    Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis
} from 'recharts';


export default function Diagram() {

    // const dispatch = useDispatch()
    // const data = useSelector(state => state.userActivities.activities)

    const baseURL = `http://localhost:8081/statistics/2`

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);

    if (!post) return null;

    const secData = [
        {
            id: 0,
            name: 'Культура',
            points: 0,
        },
        {
            id: 1,
            name: 'Образование',
            points: 0,
        },
        {
            id: 2,
            name: 'Спорт',
            points: 0,
        },
        {
            id: 3,
            name: 'Здоровье',
            points: 0,
        },
    ]

    post.map((activities) => {
        if (activities.area === "sport")
            secData[2].points += activities.score
        else if (activities.area === "art")
            secData[0].points += activities.score
        else if (activities.area === "education")
            secData[1].points += activities.score
        else if (activities.area === "medicine")
            secData[3].points += activities.score
    })

    const data = secData

    console.log(data);

    return (

        <RadarChart height={450} width={470}
            outerRadius="60%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="points" stroke="blue"
                fill="blue" fillOpacity={0.4} />
        </RadarChart>
    )
}


