import { React, useState } from 'react';
import s from './History.module.scss'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';


ChartJS.register(ArcElement, Tooltip, Legend);

const History = () => {

  const sportHistory = useSelector(state => state.userActivHistory.sport)
  const educationHistory = useSelector(state => state.userActivHistory.education)
  const madicineHistory = useSelector(state => state.userActivHistory.medicine)
  const cultureHistory = useSelector(state => state.userActivHistory.culture)

  const allHistory = [...sportHistory, ...educationHistory, ...madicineHistory, ...cultureHistory]

  const SetData = (history = allHistory) => {

    let activitiesNames = history.map((activities) => activities.name)
    let activitiesPoints = history.map((activities) => activities.point)

    let activitiesColors = history.map((activities) =>
      'rgba(' + ((activities.groupId === 1 ? 255 + 23 * activities.id : 120))
      + ',' + ((activities.groupId === 2 ? 255 + 23 * activities.id : 80)) + ', '
      + ((activities.groupId === 3 ? 255 + 23 * activities.id : 40)) + ', '
      + 0.09 * activities.point + ')')


    let borderColor = []

    const data = {

      labels: activitiesNames,
      datasets: [
        {
          label: 'Баллов активностей',
          data: activitiesPoints,
          backgroundColor: activitiesColors,
          borderColor: borderColor,
          borderWidth: 1,
        },
      ],
    }

    return (data)

  }

  const [state, setstate] = useState({ data: SetData(allHistory) })

  const ChangeOnSport = () => {
    setstate({ data: SetData(sportHistory) })
  }

  const ChangeOnEducation = () => {
    setstate({ data: SetData(educationHistory) })
  }

  const ChangeOnCulture = () => {
    setstate({ data: SetData(cultureHistory) })
  }

  const ChangeOnMedicine = () => {
    setstate({ data: SetData(madicineHistory) })
  }

  const ChangeOnAll = () => {
    setstate({ data: SetData(allHistory) })
  }

  return (
    <div className={s.historyWrapper}>
      <div className={s.diagram}>
        <Doughnut data={state.data} />
      </div>

      <div className={s.buttonWrap}>
        <button onClick={ChangeOnAll} type="button">Активность </button>
        <button onClick={ChangeOnSport} type="button">Спорт </button>
        <button onClick={ChangeOnEducation} type="button">Образование </button>
        <button onClick={ChangeOnMedicine} type="button">Медицина </button>
        <button onClick={ChangeOnCulture} type="button">Культура </button>
      </div>
    </div>
  )

};

export default History;

