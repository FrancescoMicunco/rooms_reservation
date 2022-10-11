import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reservationSchema = new Schema({
    roomId: { type: "string", required: false },
    roomName: { type: "string", required: true },
    customerName: { type: "string", required: true },
    customerEmail: { type: "string", required: true },
    customerPhoneNumber: { type: "number", required: true },
    startingDate: { type: "string", required: true },
    endingDate: { type: "string", required: true },
    hostNumber: { type: "number", required: true },
    totalDays: { type: "number", required: true },
    totalAmount: { type: "number", required: true },
    isState: {
        type: "string",
        required: false,
        enum: ["pending", "confirmed", "base"],
    },
    transactionId: { type: "string", required: false },
}, { timestamp: true });

export default model("Reservation", reservationSchema);