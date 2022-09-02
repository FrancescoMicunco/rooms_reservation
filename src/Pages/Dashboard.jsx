import React from "react";
import Sidebar from "../Components/Sidebar"
import Reservation from "./Reservation"
import '../styles/dashBoard.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div>

                <Reservation />
            </div>
        </div>
    );
}

export default Dashboard;