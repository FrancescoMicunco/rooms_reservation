import React from 'react'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'
import moment from 'moment';



const { RangePicker } = DatePicker;

const dateFormat = 'DD-MM-YYYY';


// ================   this scomponent called by Reservation.jsx line 151
//  ====================================================================

function filterByDate(dates, arr) {

    const from = moment(dates[0].format("DD-MM-YYYY"))
    const to = moment(dates[1].format("DD-MM-YYYY"))
    // all rooms haven't reservation
    let filteredRoomsByToDate = arr.filter(r => r.currentBookingState.length <= 0)
    // if there isn't, looking for in all rooms
    if (filteredRoomsByToDate.length === 0) {
        const filteredByName = arr.filter(r => r.currentBookingState.map(c => {
            if (from.isAfter(c.fromdate) && to.isBefore(c.todate)) {
                console.log("found it!")
            } else { console.log("non c'è") }
        }))
        console.log("those room has reservations", filteredByName)
    }
}


const DataRange = ({ setStartingDate, setEndingDate, setTotalDays, rooms }) => {
    const dataPickerRange = (dates) => {

        const fromDate = dates[0]
        const toDate = dates[1]

        filterByDate(dates, rooms)
        setStartingDate(moment(fromDate).format("DD-MM-YYYY"));
        setEndingDate(moment(toDate).format("DD-MM-YYYY"));
        let diff = moment.duration(toDate.diff(fromDate)).asDays()
        setTotalDays(diff)
    }
    return (
        <div>
            <RangePicker
                format={dateFormat}
                onChange={dataPickerRange} />
        </div>);
}

export default DataRange;