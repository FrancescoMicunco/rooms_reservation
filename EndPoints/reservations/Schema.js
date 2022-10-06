import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reservationSchema = new Schema({
    roomId: { type: "string", required: false },
    roomName: { type: "string", required: true },
    customerName: { type: "string", required: true },
    customerEmail: { type: "string", required: true },
    customerPhoneNumber: { type: "number", required: true },
    startingDate: { type: "date", required: true },
    endingDate: { type: "date", required: true },
    hostNumber: { type: "number", required: true },
    rooms: { type: Schema.Types.ObjectId, res: "rooms" },
    isState: {
        type: "string",
        required: false,
        enum: ["pending", "confirmed", "base"],
    },
}, { timestamp: true });

export default model("Reservation", reservationSchema);