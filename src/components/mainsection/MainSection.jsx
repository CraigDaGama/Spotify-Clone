import React from "react";
import './MainSection.css'
import Trending from '../trending/Trending'
import PopularArtists from '../popularArtists/PopularArtists'

const MainSection = () => {
    return (
        <div>
            <Trending/>
            <PopularArtists/>
        </div>
    );
};

export default MainSection;
