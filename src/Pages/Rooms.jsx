import React from "react";
import CardRoom from "../Components/RoomCard"
// import room from "../data/rooms.js";


const Rooms = ({ rooms }) => {

    return (

        < div >
            <h1> OUR ROOMS </h1>

            <div >
                <CardRoom key={rooms._id} room={rooms} style={{ cursor: 'pointer' }} />
            </div>
        </div >
    );
};

export default Rooms;