import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Users Registered",
        data: [48, 52, 54, 57, 58, 59, 60, 63, 65, 68, 70, 75],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    title: {
      display: true,
      text: "This is Title",
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;
