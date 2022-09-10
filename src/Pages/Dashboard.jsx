import React, { useState } from "react";
import Sidebar from "../Components/Sidebar"
import Reservation from "./Reservation"
import Registration from "./Registration"
import Management from "./Management"
import Settings from "./Settings"
import '../styles/dashBoard.css'

const Dashboard = () => {
    const [item, setItem] = useState()

    return (
        <div className="dashboard">
            <Sidebar setItem={setItem} />
            <div style={{ paddingLeft: '10%' }}>
                {
                    item === "Reservation" ?
                        <Reservation /> : item === "Registration" ? <Registration /> : item === "Management" ? <Management />
                            : <Settings />}
            </div>
        </div>
    );
}

export default Dashboard;