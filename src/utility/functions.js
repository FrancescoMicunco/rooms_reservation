import axios from "axios";

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