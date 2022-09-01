import React from "react";
import Rooms from "./Rooms";
import "../styles/homePage.css";
import { useNavigate, Link } from "react-router-dom"

const HomePage = () => {

    let navigate = useNavigate()
    return (

        <div className="homePage">
            <div className="roomList">
                <h2>Benvenuto nel sito della nostra azienda agrituristica</h2>
                <h3>Scopri di più sulla nostra attività e visita le nostre soluzioni di ospitalità</h3>
                <button onClick={() => { navigate("/rooms") }}>Vistita la nostra Room List</button>
            </div>
            <div className="lastMinute">
                <h3> Last Minute Offer </h3>
            </div>
        </div>

    );
};

export default HomePage;
