import React from "react";
import Sidebar from "../Components/Sidebar"
import '../styles/dashBoard.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <h1>Dashboard</h1>

        </div>
    );
}

export default Dashboard;