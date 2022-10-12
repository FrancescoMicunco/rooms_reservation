import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { fetchAllReservations, fetchAllRooms } from '../utility/functions.js'
import FormControl from '@mui/material/FormControl';
import { Space } from 'antd';
import 'antd/dist/antd.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import StickyHeadTable from "../Components/TableReservation.jsx"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DataRange from "../Components/dateRangePicker.jsx"
// icons
import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import "../styles/global.css"



const Reservation = () => {

    const [reservation, setReservation] = useState([])
    const [rooms, setRooms] = useState([])
    const [roomName, setRoomName] = useState('');
    const [roomId, setRoomId] = useState()
    const [customerName, setCustomerName] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhoneNumber, setCustomerPhoneNumber] = useState('');
    const [startingDate, setStartingDate] = useState();
    const [endingDate, setEndingDate] = useState();
    const [hostNumber, setHostNumber] = useState();
    const [isState, setIsState] = useState(["pending", "base", "confirmed"])
    const [open, setOpen] = useState(false);
    const [steps, setSteps] = useState(0)
    const [isLoading, setIsLoading] = useState(false);
    const [totalDays, setTotalDays] = useState();
    const [totalAmount, setTotalAmount] = useState()


    useEffect(() => {
        fetchAllReservations(setReservation);
        fetchAllRooms(setRooms);

    }, [steps])


    const roomsNameArray = rooms?.map(rname => rname?.name)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const newReservation = {
        roomId: roomId,
        roomName: roomName,
        customerName: customerName,
        customerEmail: customerEmail,
        customerPhoneNumber: customerPhoneNumber,
        startingDate: startingDate,
        endingDate: endingDate,
        hostNumber: hostNumber,
        totalDays: totalDays,
        totalAmount: totalAmount,
    }

    // we grab room name to take room ID so we can store this value in sigleRoom
    const handleChange = (event) => {
        const text = event.target.textContent
        setRoomName(text);
        let roomid = rooms?.filter(e => e.name === text)
        const roomIdToSend = roomid[0]._id
        setRoomId(roomIdToSend)
        const rentperday = roomid[0].rentperday
        const tempTotal = rentperday * totalDays
        setTotalAmount(tempTotal)

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


    // ======  add new reservation ======== 
    function handleAddReservation() {

        try {
            const res = axios.post("/reservation", newReservation)
            if (res) {
                setSteps(c => c + 1)
            } else { console.log("impossible to add new reservation") }
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
        <div>
            <div class="pageTitle">
                <h1 >Reservation List</h1>
                <Tooltip title="add new reservation" arrow placement="left-end">
                    <IconButton>
                        <AddHomeOutlinedIcon style={{ color: "#1976d2" }} onClick={handleClickOpen} />
                    </IconButton>
                </Tooltip>
            </div>
            {
                <StickyHeadTable reservation={reservation} setReservation={setReservation} setSteps={setSteps}
                    totalDays={totalDays}
                />
            }

            <Dialog open={open} onClose={handleClose} style={{ zIndex: '5', display: 'block' }}>
                <DialogTitle>Add new reservation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill each field with correct data
                    </DialogContentText>

                    <FormControl>
                        <Space style={{ zIndex: "10" }}>
                            <DataRange setStartingDate={setStartingDate} setEndingDate={setEndingDate} setTotalDays={setTotalDays} rooms={rooms} />
                        </Space>
                        <InputLabel htmlFor="component-outlined">Room name</InputLabel>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={roomsNameArray}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Rooms"
                            />}
                            onChange={(event) => handleChange(event)
                            }
                        />
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