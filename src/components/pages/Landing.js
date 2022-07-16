import React from "react";
import { RECOMMEND_CARD } from "../../shared/constants";
import { LANDING_ARTICLE } from "../../shared/mock-data";
import { Footer, Navbar } from "../shared";

const LandingPage = () => {

    return (
        <div className="landing-page">
            <Navbar/>
            <div className="page-container">
                <div className="container">
                    <div className="card-container">
                        {RECOMMEND_CARD.map((card, index) => (
                            <div key={index} className={`recommend-card ${index === RECOMMEND_CARD.length - 1 && 'last-item'}`}>
                                <div className="header">
                                    {card.header}
                                </div>
                                <hr/>
                                <div className="sub-text">
                                    {card.subText}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="card-container">
                        {LANDING_ARTICLE.slice(0,4).map((card, index) => (
                            <div key={index} className={`article-card ${index === 3 && 'last-item'}`}>
                                <div className="image-container" style={{background: `url('${card.image}') no-repeat left center`}}></div>
                                <div className="description">
                                    {card.description}
                                </div>
                                <div className="tag-container ">
                                    {card.tags.map((tag, index) => (
                                        <div className="tag" key={`tag-${index}`}>{tag}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="card-container">
                        {LANDING_ARTICLE.slice(-4).map((card, index) => (
                            <div key={index} className={`article-card ${index === 3 && 'last-item'}`}>
                                <div className="image-container" style={{background: `url('${card.image}') no-repeat left center`}}></div>
                                <div className="description">
                                    {card.description}
                                </div>
                                <div className="tag-container ">
                                    {card.tags.map((tag, index) => (
                                        <div className="tag" key={`tag-${index}`}>{tag}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LandingPage;