import React, { useState, useEffect } from "react";
import CardRoom from "../Components/RoomCard"

import { fetchAllRooms } from '../utility/functions.js'


const Rooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fetchAllRooms(setRooms)
    }, [])

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