import React from "react";
import cardRoom from "../Components/RoomCard"

const Rooms = (room) => {
    console.log("this is prop", room)
    return (<div>
        <h1> ROOMS </h1>
        <div>
            <p>{room[0].name}</p>
        </div>
    </div>
    );
};

export default Rooms;