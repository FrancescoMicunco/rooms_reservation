import React from "react";
import Sidebar from "../Components/Sidebar"
import Reservation from "./Reservation"
import '../styles/dashBoard.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div style={{ paddingLeft: '10%' }}>

                <Reservation />
            </div>
        </div>
    );
}

export default Dashboard;