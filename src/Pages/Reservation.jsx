import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
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









const Reservation = ({ reservation }, setReservation) => {


    const [roomName, setRoomName] = React.useState('');
    const [customerName, setCustomerName] = React.useState('');
    const [customerEmail, setCustomerEmail] = React.useState('');
    const [customerPhoneNumber, setCustomerPhoneNumber] = React.useState('');
    const [startingDate, setStartingDate] = React.useState('');
    const [endingDate, setEndingDate] = React.useState('');
    const [hostNumber, setHostNumber] = React.useState();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };





    const newReservation = [{ "roomName": "Salame piccante" }
        // roomName, customerName, customerEmail, customerPhoneNumber, startingDate, endingDate, hostNumber
    ]


    const handleChange = (event) => {
        setRoomName(event.target.value);
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

    const handleStartingDate = (event) => {
        setStartingDate(event.target.value);
    };

    const handleEndingDate = (event) => {
        setEndingDate(event.target.value);
    };

    const handleHostNumber = (event) => {
        setHostNumber(event.target.value);
    };

    const handleAddReservation = async () => {
        return async () => {
            try {
                const res = await fetch("http://localhost:3001/reservation", {
                    method: "POST",
                    body: JSON.stringify(newReservation),
                    headers: new Headers({ "Content-Type": "application/json" }),
                });
                if (res.ok) {
                    console.log("this is c =>", newReservation);
                    alert("successful created!");
                } else {
                    alert("Failed creating new company");
                }
            } catch (error) {
                console.log("server error");
            }
        };
    }

    const handleSend = () => {
        handleAddReservation();
        handleClose()
    }
    return (
        <div >
            <h1>Reservation List     <span style={{ fontSize: "35px", color: "blue", cursor: "pointer" }}
                // onClick={handleClickOpen}
                onClick={handleAddReservation}
            >+</span></h1>
            {
                <StickyHeadTable reservation={reservation} setReservation={setReservation} />

            }

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new reservation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill each field with correct data
                    </DialogContentText>

                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Room name</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            value={roomName}
                            onChange={handleChange}
                            label="Name"
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
                        <InputLabel htmlFor="component-outlined">Starting Date</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            value={startingDate}
                            onChange={handleStartingDate}
                            label="Name"
                        />
                    </FormControl>


                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Ending Date</InputLabel>
                        <OutlinedInput
                            id="component-outlined"
                            value={endingDate}
                            onChange={handleEndingDate}
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