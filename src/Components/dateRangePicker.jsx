import React from 'react'
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'


const { RangePicker } = DatePicker;

const dateFormat = 'DD-MM-YYYY';


const DataRange = ({ setStartingDate, setEndingDate, setTotalDays }) => {
    const dataPickerRange = (dates) => {
        setStartingDate(dates[0]);
        setEndingDate(dates[1]);
        let diff = dates[1].diff(dates[0], 'days')
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