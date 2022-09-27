import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import moment from 'moment';
import Box from '@mui/material/Box';
import { DatePicker, Space } from 'antd';
import 'antd/dist/antd.css'
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import StickyHeadTable from "../Components/TableReservation.jsx"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { SettingsCellOutlined } from '@mui/icons-material';

import DataRange from "../Components/dateRangePicker.jsx"





const Reservation = () => {

    const [reservation, setReservation] = useState([])
    const [roomName, setRoomName] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
    const [startingDate, setStartingDate] = useState('');
    const [endingDate, setEndingDate] = useState('');
    const [hostNumber, setHostNumber] = useState();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAllReservations = async () => {
        const config = {
            method: 'get',
            url: 'http://localhost:3001/reservation',
            headers: {}
        };
        const data = await axios(config)
        setReservation(data.data)
    }

    useEffect(() => { fetchAllReservations() }, [])

    useEffect(() => { fetchAllReservations() }, [reservation])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const newReservation = {
        roomName: roomName,
        customerName: customerName,
        customerEmail: customerEmail,
        customerPhoneNumber: customerPhoneNumber,
        startingDate: startingDate,
        endingDate: endingDate,
        hostNumber: hostNumber
    }


    const handleChange = (event) => {
        const text = event.explicitOriginalTarget
        setRoomName(text.innerText);
    };

    const handleChangeLastName = (event) => {
        setCustomerName(event.target.value);
    };

    const handleChangePhone = (event) => {
        setCustomerPhoneNumber(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setCustomerEmail(event.target.value);
    };


    const handleHostNumber = (event) => {
        setHostNumber(event.target.value);
    };

    function handleAddReservation() {
        try {
            axios.post("/reservation", newReservation)
        } catch (error) {
            console.log(error)
        }
    };

    const handleSend = () => {
        setIsLoading(true);
        handleAddReservation();
        setIsLoading(false);
        handleClose()
    }
    return (
        <div >
            <h1>Reservation List</h1>

            <button style={{ fontSize: "35px", color: "blue", cursor: "pointer" }} onClick={handleClickOpen}>add</button>
            {
                <StickyHeadTable reservation={reservation} setReservation={setReservation} />

            }

            <Dialog open={open} onClose={handleClose} style={{ zIndex: '5' }}>
                <DialogTitle>Add new reservation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill each field with correct data
                    </DialogContentText>

                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Room name</InputLabel>
                        <Select
                            id="select_roomName"
                            value={roomName}
                            onChange={handleChange}
                            autoWidth
                            label="Room Name"
                        ><MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>MARGHERITA</MenuItem>
                            <MenuItem value={20}>GIGLIO</MenuItem>
                            <MenuItem value={30}>GIAGGIOLO</MenuItem>
                            <MenuItem value={40}>PESCO</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Customer Name</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            value={customerName}
                            onChange={handleChangeLastName}
                            label="Name"
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Customer email</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            value={customerEmail}
                            onChange={handleChangeEmail}
                            label="Name"
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">customer Phone Number</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            value={customerPhoneNumber}
                            onChange={handleChangePhone}
                            label="Name"
                        />
                    </FormControl>
                    <Space style={{ zIndex: "10" }}>
                        <DataRange setStartingDate={setStartingDate} setEndingDate={setEndingDate} />
                    </Space>
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Host number</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            value={hostNumber}
                            onChange={handleHostNumber}
                            label="Name"
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSend}>Send</Button>
                </DialogActions>
            </Dialog>

        </div >
    )
}

export default Reservation