import React from "react";
import "./Sidebar.css";
import Cards from "./Cards";

const Sidebar = () => {
  const Text = [
    "Legal",
    "Safety & Privacy Center",
    "Privacy Policy",
    "Cookies",
    "About Ads",
    "Accessability",
  ];
  return (
    <div className="sidebarMainContainer">
      <div className="sidebarTopSection">
        <h2>Your Library</h2>
        <h1>+</h1>
      </div>
      <div className="sidebarMiddleSection">
        <Cards
          heading="Create Your Frst Playlist"
          subheading="It's easy, we'll help you"
          buttontext="Create Playlist"
        />
        <Cards
          heading="Let's find some podcasts to follow"
          subheading="we'll keep you updated on new episodes"
          buttontext="Browse Podcasts"
        />
      </div>
      <div className="sidebarBottomSection">
        <div className="sidebarBottomSectionTopContainer">
          {Text.map((ele) => {
            return <p>{ele}</p>;
          })}
        </div>
        <div className="sidebarBottomSectionBottomContainer">
          <p>Cookies</p>
        </div>
        <div className="sidebarBottomSectionBottomContainer">
          <button>English</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
