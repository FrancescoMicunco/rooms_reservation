import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import moment from 'moment'
import { Modal } from 'antd';
import axios from 'axios';

// Date management
import 'antd/dist/antd.css'
import DataRange from "../Components/dateRangePicker.jsx"




const columns = [
    { id: "roomName", label: "Room Name", minWidth: 170 },

    {
        id: "startingDate",
        label: "From",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleTimeString("it-IT"),
    },
    {
        id: "endingDate",
        label: "To",
        minWidth: 170,
        align: "right",
        format: (value) => value.toLocaleString("en-US"),
    },

];


export default function StickyHeadTable({ reservation, setReservation }) {

    console.log("reservations from table", reservation)
    const rows = reservation
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [selectedReservation, setSelectedReservation] = React.useState({})
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [setModalText] = useState('Content of the modal');
    // const endingDate = moment(selectedReservation?.endingDate).format('YYYY-MM-DD')
    // const startingDate = moment(selectedReservation?.startingDate).format('YYYY-MM-DD')
    // let totalDays = moment.duration(startingDate.diff(endingDate)).asDays


    // Modal to reservation details
    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 500);
    };

    const handleCancel = () => {
        let id = selectedReservation._id
        deleteReservation(id)
        setOpen(false);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSingleReservation = (e) => {
        setSelectedReservation(e)
        showModal()
    }

    async function deleteReservation(id) {
        const config = {
            method: 'delete',
            url: `http://localhost:3001/reservation/${id}`,
            header: {}
        }
        try {
            await axios(config)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <DataRange />

            <Paper sx={{ width: "50vw", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow> {columns.map((column) =>
                            (<TableCell
                                key={column.id}
                                align={column.align}
                                style={
                                    { minWidth: column.minWidth }
                                } >  {column.label}
                            </TableCell>
                            ))
                            }  </TableRow> </TableHead >
                        <TableBody>  {
                            rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} onClick={() => handleSingleReservation(row)} key={row.code}

                                        >  {
                                                columns?.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id}
                                                            align={column.align} >  {
                                                                column.format && typeof value === "number" ?
                                                                    column.format(value) :
                                                                    value
                                                            }  </TableCell>
                                                    );
                                                })
                                            }  </TableRow>
                                    );
                                })
                        }  </TableBody> </Table >
                </TableContainer>
                <TablePagination rowsPerPageOptions={
                    [10, 25, 100]
                }
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>


            <Modal
                title="Reservation Detail"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <p>Room Name  -  <span style={{ fontWeight: "bold" }}>{selectedReservation?.roomName}</span></p>
                <p>Customer Name  -  <span style={{ fontWeight: "bold" }}>{selectedReservation?.customerName}</span></p>
                <p>Host  -  <span style={{ fontWeight: "bold" }}>{selectedReservation?.hostNumber}</span></p>
                <p>check in  -  <span style={{ fontWeight: "bold" }}>{selectedReservation?.startingDate}</span></p>
                <p>check out  -  <span style={{ fontWeight: "bold" }}>{selectedReservation?.endingDate}</span></p>
                <p>Customer email  -  <span style={{ fontWeight: "bold" }}>{selectedReservation?.customerEmail}</span></p>
                {/* <p>Number of day  -  <span style={{ fontWeight: "bold" }}>{totalDays}</span></p> */}
            </Modal>
        </>
    );
}