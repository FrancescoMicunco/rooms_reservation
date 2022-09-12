import React, { useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'


const { RangePicker } = DatePicker;
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
    // {
    //     id: "delete",
    //     label: "Delete",
    //     minWidth: 170,
    //     align: "right",
    //     format: (value) => value.toFixed(2),
    // },
    // {
    //     id: "update",
    //     label: "UpDate",
    //     minWidth: 170,
    //     align: "right",
    //     format: (value) => value.toFixed(2),
    // },
];





export default function StickyHeadTable({ reservation }) {

    console.log("reservations from table", reservation)
    const rows = reservation
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    return (
        <>

            <RangePicker />


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
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}

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
            </Paper></>
    );
}