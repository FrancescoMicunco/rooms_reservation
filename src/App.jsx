import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SingleRoom from './Pages/SingleRoom'
import DetailReservation from './Pages/DetailReservation.jsx'
import ErrorPage from './Pages/ErrorPage'
import Rooms from "./Pages/Rooms";
import Dashboard from "./Pages/Dashboard";
import ButtonAppBar from './Components/NavBar'
import React from "react"


function App() {



    return (
        <div className="App" >
            <BrowserRouter>
                <ButtonAppBar />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/rooms" element={<Rooms />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/rooms/:id" element={<SingleRoom />} />
                    <Route exact path="/reservation/:id" element={<DetailReservation />} />
                    <Route exact path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter >
        </div>
    );
}

export default App;