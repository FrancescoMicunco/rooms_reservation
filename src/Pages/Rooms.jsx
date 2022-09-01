import React from "react";
import CardRoom from "../Components/RoomCard"
import room from "../data/rooms.js";


const Rooms = () => {

    return (

        < div >
            <h1> OUR ROOMS </h1>

            <div >
                <CardRoom key={room.id} room={room} />
            </div>
        </div >
    );
};

export default Rooms;