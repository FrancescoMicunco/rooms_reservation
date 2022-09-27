import React from 'react'
import moment from 'moment';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';


const DataRange = ({ setStartingDate, setEndingDate }) => {


    const dataPickerRange = (dates) => {
        setStartingDate(moment(dates[0]).format(dateFormat));
        setEndingDate(moment(dates[1]).format(dateFormat))
    }
    return (
        <div>
            <RangePicker
                format={dateFormat}
                onChange={dataPickerRange} />
        </div>);
}

export default DataRange;