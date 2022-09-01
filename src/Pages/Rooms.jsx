import React from "react";
import CardRoom from "../Components/RoomCard"

const Rooms = (room) => {
    console.log("this is prop", room)
    return (<div>
        <h1> ROOMS </h1>
        <div>
            <CardRoom key={room.name} />
        </div>
    </div>
    );
};

export default Rooms;