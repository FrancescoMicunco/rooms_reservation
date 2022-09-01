import React from "react";
import room from "../data/rooms";

const CardRoom = () => {


    return (
        <div>
            {room.map((room) => (
                <>
                    <div
                        style={{ display: "flex", margin: "2%", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
                    >
                        <div>
                            <img src={room.small_pic} height="300" width="400" alt="" />
                        </div>
                        <div style={{ padding: "2%" }}>
                            <h3 style={{ fontFamily: "Roboto", fontSize: "30px", color: "indigo" }}>
                                {room.name.toUpperCase()}
                            </h3>
                            <p style={{ fontFamily: "Roboto", fontSize: "20px" }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                                asperiores! Alias consequuntur, sapiente facere ut voluptate,
                                impedit nulla ipsum error libero dicta possimus rerum ipsa ab
                                dignissimos! Sapiente, praesentium eius?
                            </p>
                            {/* <p style={{ fontFamily: "Roboto", fontSize: "20px" }}>
                                Floor
                                <span style={{ color: "red", fontWeight: "bold" }}>
                                    {room.floor}
                                </span>
                            </p> */}
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
};

export default CardRoom;
