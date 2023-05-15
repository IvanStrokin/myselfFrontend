import React from 'react';
import useState from 'react';
import s from './History.module.scss'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const History = () => {
  const baseURL = `http://localhost:8081/statistics/2`

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  const user = post

  let activitiesNames = user.map((activities) => activities.title)
  let activitiesPoints = user.map((activities) => activities.score)

  let activitiesColors = user.map((activities) =>
    'rgba(' + ((activities.area === "sport" ? 125 + 23 * activities.interestId : 40))
    + ',' + ((activities.area === "art" ? 125 + 23 * activities.interestId : 40)) + ', '
    + ((activities.area === "education" ? 125 + 23 * activities.interestId : 40)) + ', '
    + 0.04 * activities.score + ')')

  let borderColor = []

  const data = {

    labels: activitiesNames,
    datasets: [
      {
        label: 'Баллы активностей',
        data: activitiesPoints,
        backgroundColor: activitiesColors,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className={s.historyWrapper}>
      <div className={s.diagram}>
        <Doughnut data={data} />
      </div>
    </div>
  )
};

export default History;

