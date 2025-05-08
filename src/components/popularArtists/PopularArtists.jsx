import React from "react";
import './PopularArtists.css'
import ArtistCard from '../artistCard/ArtistCard'

const PopularArtists = () => {
    return (
        <div className="PopularArtistsMainContainer trendingSectionMainContainer">
            <span>
            Popular Artists
            </span>
            <ArtistCard />
        </div>
    );
};

export default PopularArtists;
