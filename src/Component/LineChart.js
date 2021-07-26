import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Installation Uptime',
                data: [48, 52, 54, 57, 58,59,60,63, 65, 68, 70, 75],
                borderColor: ['rgba(255, 99, 132, 0.2)'],
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                pointBackgroundColor: ['rgba(255, 99, 132, 0.2)'],
                pointBorderColor: ['rgba(255, 99, 132, 0.2)']
            }
        ]
    }

    const options = {
        responsive: true,
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 20
                    }
                }
            ]
        }

    }

    return (
        <Line data={data} options={options}/>
    )
}

export default LineChart
