import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reservationSchema = new Schema({
    roomName: {
        type: "string",
        required: true,
        enum: ["MARGHERITA", "GIGLIO", "GIAGGIOLO", "PESCO"],
    },
    customerName: { type: "string", required: true },
    customerEmail: { type: "string", required: true },
    customerPhoneNumber: { type: "number", required: true },
    startingDate: { type: "date", required: true },
    endingDate: { type: "date", required: true },
    hostNumber: { type: "number", required: true },
    isState: {
        type: "string",
        required: true,
        enum: ["pending", "confirmed", "base"],
    },
    // price: { type: "number", required: true },
});

export default model("reservation", reservationSchema);