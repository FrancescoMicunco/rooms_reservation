import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SingleRoom from './Pages/SingleRoom'
import ErrorPage from './Pages/ErrorPage'
import Rooms from "./Pages/Rooms";

function App() {
    return (
        <div className="App" >
            <BrowserRouter>
                <div>
                    <Link className="link" to='/'>
                        <h1 className="bigTitle" > Room Reservation App </h1>
                    </Link>
                </div>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/rooms" element={<Rooms />} />
                    <Route exact path="/rooms/:name" element={<SingleRoom />} />
                    <Route exact path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter >
        </div>
    );
}

export default App;