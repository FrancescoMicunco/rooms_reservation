import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import StickyHeadTable from "../Components/TableReservation"

const Reservation = ({ reservation }, setReservation) => {
    console.log("reservation from reservation", reservation)

    const [roomName, setRoomName] = React.useState('');
    const [customerName, setCustomerName] = React.useState('');
    const [customerEmail, setCustomerEmail] = React.useState('');
    const [customerPhoneNumber, setCustomerPhoneNumber] = React.useState('');
    const [startingDate, setStartingDate] = React.useState('');
    const [endingDate, setEndingDate] = React.useState('');
    const [hostNumber, setHostNumber] = React.useState();

    const newReservation = [roomName, customerName, customerEmail, customerPhoneNumber, startingDate, endingDate, hostNumber]


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
    return (
        <div >
            <h1>Reservation List     <span style={{ fontSize: "35px", color: "blue", cursor: "pointer" }} onClick={() => alert("click to add new reservation")}>+</span></h1>
            {
                <StickyHeadTable reservation={reservation} setReservation={setReservation} />

            }


            {/* <Box style={{ display: 'flex', flexDirection: 'column' }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
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

                <Button variant="contained" size="large" endIcon={<SendIcon />}>
                    Send
                </Button>

            </Box> */}
        </div>
    )
}

export default Reservation