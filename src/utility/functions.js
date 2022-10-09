import axios from "axios";
import moment from "moment";

export async function fetchAllReservations(setReservation) {
    const config = {
        method: "get",
        url: "http://localhost:3001/reservation",
        headers: {},
    };
    try {
        const data = await axios(config);
        if (data) {
            setReservation(data.data);
        } else {
            console.log("impossible to fetch reservations");
        }
    } catch (error) {
        console.log("Bad request", error);
    }

    // const fromDate = moment(data.startingDate).format("DD-MM-YYYY");
    // console.log("from date", fromDate);
}

export async function fetchAllRooms(setRooms) {
    const config = {
        method: "get",
        url: "http://localhost:3001/rooms",
        headers: {},
    };
    try {
        const data = await axios(config);
        if (data) {
            setRooms(data.data);
        } else {
            console.log("No rooms found");
        }
    } catch (error) {
        console.log("Bad request", error);
    }
}

export async function deleteReservation(id, setSteps) {
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