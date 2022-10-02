import axios from "axios";

export async function fetchAllReservations(setReservation) {
    const config = {
        method: "get",
        url: "http://localhost:3001/reservation",
        headers: {},
    };
    const data = await axios(config);
    setReservation(data.data);
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