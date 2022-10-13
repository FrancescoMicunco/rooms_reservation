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
    let availability = false
    let availableRooms = []

    // all rooms haven't reservation
    for (const room of arr) {
        if (room.currentBookingState.length > 0) {
            for (const item of room.currentBookingState) {
                if (from.isBetween(item.todate, item.fromdate)
                    || moment(to.isBetween(item.fromdate, item.todate))
                ) {
                    console.log("no available rooms")
                } else { console.log(" rooms available"); availability = true }
            } if (availability === true) {
                availableRooms.push(room)
                console.log("available rooms", availableRooms)
            }
        }
    }
}
// ======================

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