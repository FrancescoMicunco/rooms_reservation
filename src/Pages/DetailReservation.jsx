import React from 'react'
import { useLocation } from 'react-router-dom';
import '../styles/global.css'


const DetailReservation = () => {
    let location = useLocation();
    const data = location.state.record
    return (
        <div>
            <h1 style={{ fontFamily: "Lato", marginTop: "30px" }}>DETAIL RESERVATION</h1>
            <div class="showdata" >
                <p>Customer Name  <span class="detres" >{data.customerName}</span></p>
                <p>Email <span class="detres" >{data.customerEmail}</span></p>
                <p>Phone <span class="detres" >{data.customerPhoneNumber}</span></p>
                <p>Host Number <span class="detres" >{data.hostNumber}</span></p>
                <p>From <span class="detres" >{data.startingDate}</span></p>
                <p>To <span class="detres" >{data.endingDate}</span></p>
                <p>Total Days <span class="detres" >{data.totalDays}</span></p>
                <p>Totale Amount <span class="detres" >{data.totalAmount}</span></p>
            </div>
        </div>
    );
}

export default DetailReservation;