import React, { useState, useRef, useEffect } from "react";
import { fetchAllReservations } from '../utility/functions.js'
import moment from 'moment';
import axios from 'axios';

// import table from antd
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Modal } from "antd";
import Highlighter from "react-highlight-words";
import "antd/dist/antd.css";

// navigate
import { useNavigate } from "react-router-dom"

// icons
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

export default function StickyHeadTable({ reservation, setReservation }) {
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const [isShown, setIsShown] = useState(false)
    const [steps, setSteps] = useState(0)
    const searchInput = useRef(null);

    let navigate = useNavigate()

    useEffect(() => { fetchAllReservations(setReservation) }, [steps])

    async function deleteReservation(id) {
        const config = {
            method: "delete",
            url: `http://localhost:3001/reservation/${id}`,
            header: {},
        };
        try {
            const res = await axios(config);
            if (res) {
                console.log(`The reservation n. ${id} has been deleted successfully`);
                setSteps((c) => c + 1);
            } else {
                console.log(`The reservation n. ${id} doesn't exist`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const showDeleteConfirm = (id, setSteps = steps) => {
        confirm({
            title: 'Are you sure delete this task?',
            icon: <ExclamationCircleOutlined />,
            content: ` `,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',

            onOk() {
                deleteReservation(id, setSteps)
            },

            onCancel() {
                console.log('Cancel');
            },
        });
    };

    // end alert delete modal 

    const rows = reservation;
    console.log(rows)
    // console.log("total days", totalDays)

    // function for the data table
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const getFullDate = (date) => {
        return date
        // moment(date).format("DD-MM-YYYY")
        // const dateAndTime = date.split('T');
        // return dateAndTime[0].split('-').reverse().join('-');
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
            width: "20%",
            ...getColumnSearchProps("roomName"),
            sorter: (a, b) => a?.roomName.length - b?.roomName.length,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "Customer Name",
            dataIndex: "customerName",
            key: "customerName",
            width: "35%",
            ...getColumnSearchProps("customerName"),
            sorter: (a, b) => a?.customerName.length - b?.customerName.length,
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "From",
            dataIndex: "startingDate",
            key: "startingDate",
            ...getColumnSearchProps("startingDate"),
            render: ((date) => getFullDate(date)),
            sorter: (a, b) => moment(a?.startingDate) - moment(b?.startingDate),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "To",
            dataIndex: "endingDate",
            key: "endingDate",
            ...getColumnSearchProps("endingDate"),
            render: ((date) => getFullDate(date)),
            sorter: (a, b) => moment(a?.endingDate) - moment(b?.endingDate),
            sortDirections: ["descend", "ascend"],
        },
        {
            title: "State",
            dataIndex: "isState",
            key: "isState",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (text, record) => (
                <div style={{ display: 'flex' }}>
                    <DeleteForeverOutlinedIcon style={{ color: "red", cursor: "pointer" }} onClick={() => {
                        const id = record._id;
                        showDeleteConfirm(id)
                    }} />

                    <UpdateOutlinedIcon style={{ color: "green", cursor: "pointer" }} onClick={() => {
                        console.log(record);
                    }} />

                </div>
            ),
        },
        {
            title: "Show details",
            dataIndex: "showDetails",
            key: "showDetails",
            render: (text, record) => (
                <div style={{ display: 'flex', cursor: "pointer" }}>
                    {
                        isShown ?
                            (<VisibilityIcon onClick={() => {
                                setIsShown(false)
                                const id = record._id;

                            }} />)
                            : (<VisibilityOffIcon
                                onClick={() => {
                                    setIsShown(true)
                                    const id = record._id;
                                    navigate("/DetailReservation", { state: { record } })
                                }} />)
                    }
                </div>
            ),
        },
        {
            title: "",
            dataIndex: "registration",
            key: "registration",
            render: (text, record) => (
                <div>
                    <Button onClick={() => {
                        navigate("/registration", { state: { record } })
                    }}>registration</Button>
                </div>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={rows} />

        </>
    );
}
