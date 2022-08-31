import React from "react";
import Rooms from "./Rooms";
import "../styles/homePage.css";
import room from '../data/rooms.js'

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="roomList">
                <Rooms room={room} />
            </div>
            <div className="lastMinute">
                <h3> Last Minute Offer </h3>
            </div>
        </div>
    );
};

export default HomePage;
