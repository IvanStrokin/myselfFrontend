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

  // const [state, setstate] = useState({ data: SetData(allHistory) })

  // const ChangeOnSport = () => {
  //   setstate({ data: SetData(sportHistory) })
  // }

  // const ChangeOnEducation = () => {
  //   setstate({ data: SetData(educationHistory) })
  // }

  // const ChangeOnCulture = () => {
  //   setstate({ data: SetData(cultureHistory) })
  // }

  // const ChangeOnMedicine = () => {
  //   setstate({ data: SetData(madicineHistory) })
  // }

  // const ChangeOnAll = () => {
  //   setstate({ data: SetData(allHistory) })
  // }

  // return (
  //   <div className={s.historyWrapper}>
  //     <div className={s.diagram}>
  //       <Doughnut data={state.data} />
  //     </div>

  //     <div className={s.buttonWrap}>
  //       <button onClick={ChangeOnAll} type="button">Активность </button>
  //       <button onClick={ChangeOnSport} type="button">Спорт </button>
  //       <button onClick={ChangeOnEducation} type="button">Образование </button>
  //       <button onClick={ChangeOnMedicine} type="button">Медицина </button>
  //       <button onClick={ChangeOnCulture} type="button">Культура </button>
  //     </div>
  //   </div>
  // )

};

export default History;

