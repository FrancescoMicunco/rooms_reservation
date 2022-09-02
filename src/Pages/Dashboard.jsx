import React from "react";
import Sidebar from "../Components/Sidebar"
import Registration from "./Registration"
import '../styles/dashBoard.css'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div>
                <h1>Dashboard</h1>
                <Registration />
            </div>
        </div>
    );
}

export default Dashboard;