import React from 'react'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'

import moment from 'moment';


const { RangePicker } = DatePicker;

const dateFormat = 'DD-MM-YYYY';


// ================   this scomponent called by Reservation.jsx line 151
//  ====================================================================

const DataRange = ({ setStartingDate, setEndingDate, setTotalDays }) => {
    const dataPickerRange = (dates) => {
        // const fromDate = moment(dates[0]).format("DD-MM-YYYY")
        const fromDate = dates[0]
        const toDate = dates[1]
        // const toDate = moment(dates[1]).format("DD-MM-YYYY")

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