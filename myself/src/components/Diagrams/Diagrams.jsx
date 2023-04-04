import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import {
    Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis
} from 'recharts';


export default function Diagram () {

    const dispatch = useDispatch()
    const data = useSelector(state => state.userActivities.activities)
        return (
            
                <RadarChart height={450} width={450}
                    outerRadius="60%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis />
                    <Radar dataKey="points" stroke="blue"
                        fill="blue" fillOpacity={0.4} />
                </RadarChart>
        )
    }


