import React from 'react';
import { RECORD_CARD } from '../../shared/constants';
import { Footer, Navbar } from '../shared';

const MyRecordPage = () => {
    return (
        <div className='my-record-page'>
            <Navbar />
            <div className='page-container'>
                <div className='container'>
                    <div className='card-container'>
                        {RECORD_CARD.map((card, index) => (
                            <div key={index} className={`record-card ${index === RECORD_CARD.length - 1 && 'last-item'}`}>
                                <div className='record-inner' style={{background: `linear-gradient( rgba(70, 70, 70, 0.5), rgba(70, 70, 70, 0.5) ), url('${card.image}`}}>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyRecordPage;
