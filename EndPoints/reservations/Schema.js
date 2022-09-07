import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reservationSchema = new Schema({
    roomName: { type: "string", required: true },
    customerName: { type: "string", required: true },
    customerEmail: { type: "string", required: true },
    customerPhoneNumber: { type: "number", required: true },
    startingDate: { type: "date", required: true },
    endingDate: { type: "date", required: true },
    hostNumber: { type: "number", required: true },
});

export default model("reservation", reservationSchema);