export const getAllRooms = async() => {
    try {
        const response = await fetch(`http://localhost:3001/rooms`);
        if (response.ok) {
            const rooms = await response.json();
            console.log("those are rooms", rooms);
        } else {
            throw new Error("Failed to fetch!");
        }
    } catch (error) {
        console.log(error);
    }
};