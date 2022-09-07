import React from "react";
import Sidebar from "../Components/Sidebar"
import Reservation from "./Reservation"
import Registration from "./Registration"
import Management from "./Management"
import Settings from "./Settings"
import '../styles/dashBoard.css'

const Dashboard = (reservation) => {
    const [item, setItem] = React.useState()
    console.log("reservation from dashboard", reservation)

    let Mycomponent = item || Reservation
    // console.log("MyComponent", Mycomponent)
    return (
        <div className="dashboard">
            <Sidebar setItem={setItem} />
            <div style={{ paddingLeft: '10%' }}>
                <Mycomponent />
                {/* <Reservation /> */}
            </div>
        </div>
    );
}

export default Dashboard;