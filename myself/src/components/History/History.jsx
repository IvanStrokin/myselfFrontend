import React from "react";
import { Bar } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js";
import {  registerables } from 'chart.js';
Chart.register(...registerables);
Chart.register(CategoryScale);

const History = () => {
  const barChartData = {
    labels: ["Топ 10 актинвостей"],
    datasets: [
      {
        data: [10],
        label: "Футбол",
        borderColor: "#3333ff",
        backgroundColor: "rgba(0, 0, 255, 0.5)",
        fill: true
      },
      {
        data: [4],
        label: "Плавание",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true
      },
      {
        data: [6],
        label: "Чтение",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true
      },
      {
        data: [3],
        label: "Санный спорт",
        borderColor: "#ff3333",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        fill: true
      },
      {
        data: [3], label: "Deaths People",  borderColor: "#ff3333",backgroundColor: "rgba(255, 0, 0, 0.5)",fill: true
      }
    ]
  };

  const barChart = (
    <Bar
      type="bar"
      width={100}
      height={50}
      options={{
        title: {
          display: true,
          text: "COVID-19 Cases of Last 3 Months",
          fontSize: 15
        },
        legend: {
          display: true, //Is the legend shown?
          position: 'bottom' //Position of the legend.
        }
      }}
      data={barChartData}
    />
  );
  return barChart;
};

export default History;

