import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { lineChartOptions, mealData, myRecordLineChartData } from '../../shared/mock-data';
import { Footer, Navbar } from '../shared';
import { FOOD_MENU } from '../../shared/constants';
import SVG from '../../resources/svg';

const AfterLogin = () => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
    return (
        <div className='after-login-page'>
            <Navbar />
            <div className='page-container'>
                <div className='section-top'>
                    <div className='image-container'>
                        <div className='circle'>
                            <div>
                                <span className='decimal'>05/21</span>
                                <span className='percent'>75%</span>
                            </div>
                        </div>
                    </div>
                    <div className='chart-container'>
                        <Line height='200px' options={lineChartOptions} data={myRecordLineChartData} />
                    </div>
                </div>
                <div className='hex-button-container'>
                    {FOOD_MENU.map((item, index) => (
                        <button key={`button-${index}`} className='hex-button'>
                            {index !== 3 ? <SVG.KnifeFork /> : <SVG.Snack />}
                            <div className='text'>{item.text}</div>
                        </button>
                    ))}
                </div>
                <div className='container'>
                    <div className='card-container wrap' style={{ marginBottom: 20 }}>
                        {mealData.map((card, index) => (
                            <div key={index} className={`article-card ${(index + 1) % 4 === 0 && 'last-item'}`}>
                                <div className='image-container' style={{ background: `url('${card.image}') no-repeat left center` }}>
                                    <div className='created-date'>{card.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='bottom-button-container'>
                    <button className='bottom-button'>コラムをもっと見る</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AfterLogin;
