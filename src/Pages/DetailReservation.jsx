import React from 'react'
import { useParams } from 'react-router-dom';




const DetailReservation = () => {
    let params = useParams();
    // let reservationSelected = reservation?.find(res => res._id === params._id)
    return (<h1>detail reservation</h1>);
}

export default DetailReservation;