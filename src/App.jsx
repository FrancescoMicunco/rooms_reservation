import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SingleRoom from './Pages/SingleRoom'
import ErrorPage from './Pages/ErrorPage'
import Rooms from "./Pages/Rooms";
import Dashboard from "./Pages/Dashboard";
import ButtonAppBar from './Components/NavBar'
import React, { useState, useEffect } from "react"


function App() {

    const [rooms, setRooms] = useState([])
    const [reservation, setReservation] = useState([])





    //     // here we download the rooms for the first time
    useEffect(() => {

        return async () => {
            try {
                const res = await fetch("http://localhost:3001/rooms")
                if (res.ok) {
                    const roomList = await res.json()
                    console.log("res", roomList)
                    setRooms(roomList)
                } else { console.log("failed to fetch data") }
            } catch (error) { console.log("server error") }

        }

    }, [])





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