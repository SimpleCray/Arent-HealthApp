import React from 'react';
import { RECOMMEND_CARD } from '../../shared/constants';
import { LANDING_ARTICLE } from '../../shared/mock-data';
import { Footer, Navbar } from '../shared';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Navbar />
            <div className='page-container'>
                <div className='container'>
                    <div className='card-container'>
                        {RECOMMEND_CARD.map((card, index) => (
                            <div key={index} className={`recommend-card ${index === RECOMMEND_CARD.length - 1 && 'last-item'}`}>
                                <div className='header'>{card.header}</div>
                                <hr />
                                <div className='sub-text'>{card.subText}</div>
                            </div>
                        ))}
                    </div>
                    <div className='card-container wrap' style={{marginBottom: 20}}>
                        {LANDING_ARTICLE.map((card, index) => (
                            <div key={index} className={`article-card ${(index + 1) % 4 === 0 && 'last-item'}`}>
                                <div className='image-container' style={{ background: `url('${card.image}') no-repeat left center` }}>
                                    <div className='created-date'>{card.created}</div>
                                </div>
                                <div className='description'>{card.description}</div>
                                <div className='tag-container '>
                                    {card.tags.map((tag, index) => (
                                        <div className='tag' key={`tag-${index}`}>
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='bottom-button-container'>
                        <button className='bottom-button'>コラムをもっと見る</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
