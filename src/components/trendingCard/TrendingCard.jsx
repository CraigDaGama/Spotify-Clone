import React from "react";
import './TrendingCard.css'
import { TrendingCardData } from '../../config/config'

const TrendingCard = ({setCurrentPage}) => {
    return (
        <>
            <div className="trendingCardMainContainer">
                {
                    TrendingCardData.map((ele) => {
                        return (
                            <>
                                <div onClick={() => {
                                    setCurrentPage("musicSpecificPage")
                                }} className="cardContainer">
                                    <img src={ele.imgSrc} alt="" />
                                    <div className="CardTextContainer">
                                        <h2>{ele.heading}</h2>
                                        <p>{ele.subHeading}</p>
                                    </div>
                                    
                                </div>

                            </>
                        )
                    })
                }
            </div>

        </>

    );
};

export default TrendingCard;
