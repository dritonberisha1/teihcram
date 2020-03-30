import React from "react";
import { Doughnut, Pie, Bar } from 'react-chartjs-2';
import waves from '../../images/waves.svg';

const COLORS = {
    FIRST: '#fed530',
    SECOND: '#85c6c0',
    THIRD: '#a5d2f0',
    OTHER: '#a39393'
}

const data = {
    labels: [
        'Volvo',
        'Saab',
        'Tele2',
        'Other'
    ],
    datasets: [{
        data: [50, 40, 35, 70],
        backgroundColor: [
            COLORS.FIRST,
            COLORS.SECOND,
            COLORS.THIRD,
            COLORS.OTHER
        ],
        hoverBackgroundColor: [
            COLORS.FIRST,
            COLORS.SECOND,
            COLORS.THIRD,
            COLORS.OTHER
        ]
    }]
};

const options = {
    scales: {
        yAxes: [{
            gridLines: {
                drawTicks: false,
                drawBorder: false,
            },
            weight: 5,
            ticks: {
                padding: 30
            }
        }],
        xAxes: [
            {
                barThickness: 'flex',
                maxBarThickness: 8,
                gridLines: {
                    drawTicks: false,
                    drawBorder: false,
                },
                weight: 5,
                ticks: {
                    padding: 30
                }
            }]

    }
}
export default () => {
    return (
        <section className="section leaderboard">
            <div className="title">
                <h1>LEADERBOARD</h1>
            </div>
            <div className="chart">
                <Doughnut data={data} legend={false} width={100} height={100}/>
            </div>
            <div className="list">
                
                <ol>
                    <li>Volvo <span class="badge" style={{ backgroundColor: COLORS.FIRST }}>50</span></li>
                    <li>Saab <span class="badge" style={{ backgroundColor: COLORS.SECOND }}>40</span></li>
                    <li>Tele2 <span class="badge" style={{ backgroundColor: COLORS.THIRD }}>35</span></li>
                    <li>Other <span class="badge" style={{ backgroundColor: COLORS.OTHER }}>70</span></li>
                </ol>

            </div>
            <div className="bottom-waves">
                <img src={waves} />
            </div>
        </section>
    );
};