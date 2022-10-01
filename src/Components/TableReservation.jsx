import React, { useState, useRef } from "react";
import { deleteReservation } from '../utility/functions.js'
import moment from 'moment';
// import table from antd
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import "antd/dist/antd.css";

// icons
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";


export default function StickyHeadTable({ reservation, setSteps }) {
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);

    const rows = reservation;
    const endDate = moment(reservation.endingDate).format('YYYY-MM-DD')

    // function for the data table
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const getFullDate = (date) => {
        const dateAndTime = date.split('T');
        return dateAndTime[0].split('-').reverse().join('-');
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };


    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1890ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),

        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => {
                    searchInput.current?.select();
                }, 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: "Room Name",
            dataIndex: "roomName",
            key: "roomName",
            width: "30%",
            ...getColumnSearchProps("roomName"),
            sorter: (a, b) => a.roomName.length - b.roomName.length,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Customer Name",
            dataIndex: "customerName",
            key: "customerName",
            width: "30%",
            ...getColumnSearchProps("customerName"),
            sorter: (a, b) => a.customerName.length - b.customerName.length,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "From",
            dataIndex: "startingDate",
            key: "startingDate",
            ...getColumnSearchProps("startingDate"),
            render: ((date) => getFullDate(date)),
            sorter: (a, b) => moment(a.startingDate) - moment(b.startingDate),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "To",
            dataIndex: "endingDate",
            key: "endingDate",
            ...getColumnSearchProps("endingDate"),
            render: ((date) => getFullDate(date)),
            sorter: (a, b) => moment(a.endingDate) - moment(b.endingDate),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (text, record) => (
                <div style={{ display: 'flex' }}>
                    <DeleteForeverOutlinedIcon style={{ color: "red" }} onClick={() => {
                        const id = record._id;
                        deleteReservation(id, setSteps)

                    }} />

                    <UpdateOutlinedIcon style={{ color: "green" }} onClick={() => {
                        console.log(record);
                    }} />

                </div>
            ),
        },
    ];

    return (
        <Table columns={columns} dataSource={rows} />
    );
}
