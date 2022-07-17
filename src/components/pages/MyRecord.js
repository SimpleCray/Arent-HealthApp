import React, { Fragment } from 'react';
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
        layout: {
            padding: {
                left: 50,
                right: 50,
                top: 10,
                bottom: 10,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white',
                    font: {
                        size: 10,
                        weight: 300,
                    },
                },
                grid: {
                    drawBorder: false, // <-- this removes axis line
                    lineWidth: 0.7,
                    color: COLOR.gray,
                },
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
    const buttons = [
        { text: '日', active: false },
        { text: '週', active: false },
        { text: '月', active: false },
        { text: '年', active: true },
    ];
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
                                    style={{ background: `linear-gradient( rgba(50, 50, 50, 0.6), rgba(50, 50, 50, 0.6) ), url('${card.image}` }}
                                >
                                    <div className='header'>{card.header}</div>
                                    <div className='banner'>{card.subText}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='chart-container'>
                        <div className='chart-header'>
                            <div className='chart-name'>
                                BODY <br /> RECORD
                            </div>
                            <div className='date'>2021.05.21</div>
                        </div>
                        <div>
                            <Line height='200px' options={options} data={myRecordLineChartData} />
                        </div>
                        <div className='button-container'>
                            {buttons.map((button) => (
                                <button className={`button ${button.active && 'active'}`}>{button.text}</button>
                            ))}
                        </div>
                    </div>
                    <div className='chart-container'>
                        <div className='chart-header'>
                            <div className='chart-name'>
                                MY <br /> EXERCISE
                            </div>
                            <div className='date'>2021.05.21</div>
                        </div>
                        <div className='data-container'>
                            {Array.from({ length: 20 }, () => ({ name: '家事全般（立位・軽い）', kcal: 26, duration: '10 min' })).map((item, index) => (
                                <div className='data-item'>
                                    <li>
                                        <div className='name'>
                                            {item.name}
                                            <br />
                                            <span className='kcal'>{item.kcal}kcal</span>
                                        </div>
                                    </li>
                                    <div className='duration'>{item.duration}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyRecordPage;
