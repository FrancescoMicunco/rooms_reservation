import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import SingleRoom from './Pages/SingleRoom'
import ErrorPage from './Pages/ErrorPage'

function App() {
    return (

        <BrowserRouter>
            <div>
                <h1 className="bigTitle" > Room Reservation App </h1>
            </div>
            <Routes>
                {/* <div className="App" > */}
                <Route path="/" element={<HomePage />} />
                <Route path="/:id" element={<SingleRoom />} />
                <Route path="*" element={<ErrorPage />} />
                {/* </div> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;