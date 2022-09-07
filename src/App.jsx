import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SingleRoom from './Pages/SingleRoom'
import ErrorPage from './Pages/ErrorPage'
import Rooms from "./Pages/Rooms";
import Dashboard from "./Pages/Dashboard";
import ButtonAppBar from './Components/NavBar'
import React, { useState, useEffect } from "react"
import axios from 'axios'

function App() {

    const [rooms, setRooms] = useState([])
    const [reservation, setReservation] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await axios('http://localhost:3002/rooms');
            setRooms(data.data)
        }
        fetchData()
        console.log("those are the rooms", rooms)

        async function fetchReservation() {
            const reservations = await axios('http://localhost:3002/reservation');
            setReservation(await reservations.data)
        }
        fetchReservation()
        console.log("those are the reservations", reservation)
    }, [])

    return (
        <div className="App" >
            <BrowserRouter>
                <ButtonAppBar />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/rooms" element={<Rooms rooms={rooms} />} />
                    <Route exact path="/dashboard" element={<Dashboard reservations={reservation} />} />
                    <Route exact path="/rooms/:name" element={<SingleRoom />} />
                    <Route exact path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter >
        </div>
    );
}

export default App;