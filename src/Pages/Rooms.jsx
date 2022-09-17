import React, { useStateIfMounted, useState, useEffect } from "react";
import CardRoom from "../Components/RoomCard"
import axios from 'axios'


const Rooms = () => {
    const [rooms, setRooms] = useState([])

    async function fetchAllRooms() {
        const config = {
            method: 'get',
            url: 'http://localhost:3001/rooms',
            headers: {}
        };
        try {
            const data = (await axios(config)).data
            setRooms(data)
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {

        fetchAllRooms()
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