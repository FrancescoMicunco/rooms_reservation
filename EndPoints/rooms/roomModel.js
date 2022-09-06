import mongoose from "mongoose";

const { Schema, model } = mongoose;
const roomSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    rentperday: { type: Number, required: true },
    smokingRoom: { type: String, required: true },
    floor: { type: Number, required: true },
    bath: { type: String, required: true },
    handicapHallowed: { type: String, required: true },
    small_pic: [],
    maxHost: { type: Number, required: true },
    currentBookingState: [],
}, { timestamp: true });

export default model("rooms", roomSchema);