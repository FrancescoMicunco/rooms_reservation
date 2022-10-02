import React from 'react';
import { useLocation } from 'react-router-dom'



const Registration = () => {
    const location = useLocation();
    const data = location.state.record
    console.log("Location from stickyTable", data._id);
    return (
        <>
            < h1 > Reservation form</h1 >
            <p>{location.state.customerName}</p>
        </>
    )

}



export default Registration;
