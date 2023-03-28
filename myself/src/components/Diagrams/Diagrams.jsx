import React from "react";

import {
    Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const data = [
    { name: 'Футбол', x: 21 },
    { name: 'Плавание', x: 22 },
    { name: 'Театр', x: -32 },
    { name: 'Кино', x: -14 },
    { name: 'Бейсбол', x: -51 },
    { name: 'Чтение', x: 16 },
];


class Diagram extends React.Component {
    render() {
        return (
            
                <RadarChart height={400} width={500}
                    outerRadius="80%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis />
                    <Radar dataKey="x" stroke="green"
                        fill="green" fillOpacity={0.5} />
                </RadarChart>
        )
    }
}

export default Diagram;