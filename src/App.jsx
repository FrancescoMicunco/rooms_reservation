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

    return (
        <div className="App" >
            <BrowserRouter>
                <ButtonAppBar />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/rooms" element={<Rooms rooms={rooms} />} />
                    <Route exact path="/dashboard" element={<Dashboard reservations={reservation} setReservation={setReservation} />} />
                    <Route exact path="/rooms/:name" element={<SingleRoom />} />
                    <Route exact path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter >
        </div>
    );
}

export default App;