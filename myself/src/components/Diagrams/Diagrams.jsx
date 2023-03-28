import React from "react";
import {
    Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis
} from 'recharts';


const data = [
    { name: 'Культура', x: 21 },
    { name: 'Спорт', x: 22 },
    { name: 'Образование', x: 12 },
    { name: 'Здоровье', x: 5 },

];

class Diagram extends React.Component {
    render() {
        return (
            <RadarChart height={400} width={600}
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