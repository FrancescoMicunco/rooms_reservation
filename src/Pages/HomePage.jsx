import React from "react";
import "../styles/homePage.css";
import { useNavigate, Link } from "react-router-dom"
import Button from '@mui/material/Button'


const HomePage = () => {

    let navigate = useNavigate()
    return (

        <div className="homePage">
            <div className="roomList">
                <h2>Benvenuto nel sito della nostra azienda agrituristica</h2>
                <h3>Scopri di più sulla nostra attività e visita le nostre soluzioni di ospitalità</h3>
                <Button variant="contained" onClick={() => { navigate("/rooms") }}>Room List</Button>
            </div>
            <div className="lastMinute">
                <h3> Last Minute Offer </h3>
            </div>
        </div>

    );
};

export default HomePage;
