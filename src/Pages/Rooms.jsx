import React from "react";
import CardRoom from "../Components/RoomCard"

const Rooms = (room) => {
    console.log("this is prop", room)
    return (
        <div>
            <h1> OUR ROOMS </h1>
            <div onClick={e => console.log("single room")}>
                <CardRoom key={room.id} />
            </div>
        </div >
    );
};

export default Rooms;