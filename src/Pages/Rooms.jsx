import React from "react";
import CardRoom from "../Components/RoomCard"
import room from "../data/rooms.js";


const Rooms = () => {


    return (

        < div >
            <h1> OUR ROOMS </h1>

            <div >
                <CardRoom key={room._id} room={room} style={{ cursor: 'pointer' }} />
            </div>
        </div >
    );
};

export default Rooms;