export const fetchData = (r) => {
    return async() => {
        try {
            const res = await fetch("http://localhost:3001/rooms");
            if (res.ok) {
                const r = await res.json();
                console.log("new reservation", r);
            } else {
                console.log("error fetching data from server");
            }
        } catch (error) {
            console.log("server error");
        }
    };
};