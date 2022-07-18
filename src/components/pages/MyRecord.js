import React, { Fragment } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { COLOR, RECORD_CARD } from '../../shared/constants';
import { lineChartOptions, myRecordLineChartData } from '../../shared/mock-data';
import { Footer, Navbar } from '../shared';
import { Line } from 'react-chartjs-2';
import ScrollTopButton from '../shared/ScrollTopButton';

const exerciseItem = { name: '家事全般（立位・軽い）', kcal: 26, duration: '10 min' }

const diaryItem = {
    date: '2021.05.21',
    hour: '23:25',
    name: '私の日記の記録が一部表示されます。',
    description: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…'
}

const MyRecordPage = () => {
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
                            <Line height='200px' options={lineChartOptions} data={myRecordLineChartData} />
                        </div>
                        <div className='button-container'>
                            {buttons.map((button, index) => (
                                <button key={`button-${index}`} className={`button ${button.active && 'active'}`}>{button.text}</button>
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
                            {Array.from({ length: 20 }, () => exerciseItem).map((item, index) => (
                                <div className='data-item' key={`data-${index}`}>
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
                    <div className='my-diary-container'>
                        <div className='name'>MY DIARY</div>
                        <div className='data-container'>
                        {Array.from({ length: 8 }, () => diaryItem).map((item, index) => (
                            <div key={`diary-${index}`} className={`data-item ${(index + 1) % 4 === 0 && 'last-item'}`}>
                                <div className='date-time'>{item.date}</div>
                                <div className='date-time' style={{marginBottom: 10}}>{item.hour}</div>
                                <div className='text'>{item.name}</div>
                                <div className='text'>{item.description}</div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className='bottom-button-container'>
                        <button className='bottom-button'>コラムをもっと見る</button>
                    </div>
                </div>
            </div>
            <ScrollTopButton/>
            <Footer />
        </div>
    );
};

export default MyRecordPage;
