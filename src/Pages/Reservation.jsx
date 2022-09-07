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


const Reservation = () => {
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
        customerName(event.target.value);
    };

    const handleChangePhone = (event) => {
        setCustomerPhoneNumber(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setCustomerEmail(event.target.value);
    };

    const handlestartingDate = (event) => {
        setStartingDate(event.target.value);
    };
    const handlehostNumber = (event) => {
        setHostNumber(event.target.value);
    };
    return (
        <div >
            <h1>Reservation</h1>
            <Box style={{ display: 'flex', flexDirection: 'column' }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl>
                    <InputLabel htmlFor="component-outlined">rooms</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={rooms}
                        onChange={handleChangeRooms}
                        label="Name"
                    />
                </FormControl>


                <FormControl>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={name}
                        onChange={handleChange}
                        label="Name"
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={last_name}
                        onChange={handleChangeLastName}
                        label="Name"
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">email</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        value={email}
                        onChange={handleChangeEmail}
                        label="Name"
                    />
                </FormControl>

                <Button variant="contained" size="large" endIcon={<SendIcon />}>
                    Send
                </Button>

            </Box>
        </div>
    )
}

export default Reservation