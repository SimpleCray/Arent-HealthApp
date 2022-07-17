import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { COLOR, RECORD_CARD } from '../../shared/constants';
import { myRecordLineChartData } from '../../shared/mock-data';
import { Footer, Navbar } from '../shared';
import { Line } from 'react-chartjs-2';

const MyRecordPage = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "white",
                    font: {
                        size: 10,
                        weight: 300,
                    }
                },
                grid: {
                    drawBorder: false, // <-- this removes axis line
                    lineWidth: 0.7,
                    color: COLOR.gray
                }
            },
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },
        },
        maintainAspectRatio: false,
    };
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    return (
        <div className='my-record-page'>
            <Navbar />
            <div className='page-container'>
                <div className='container'>
                    <div className='card-container'>
                        {RECORD_CARD.map((card, index) => (
                            <div key={index} className={`record-card ${index === RECORD_CARD.length - 1 && 'last-item'}`}>
                                <div
                                    className='record-inner'
                                    style={{ background: `linear-gradient( rgba(70, 70, 70, 0.5), rgba(70, 70, 70, 0.5) ), url('${card.image}` }}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className='chart-container'>
                        <Line height='200px' options={options} data={myRecordLineChartData} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyRecordPage;
