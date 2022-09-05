import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    smokingRoom: { type: String, required: true },
    floor: { type: Number, required: true },
    bath: { type: String, required: true },
    handicapHallowed: { type: String, required: true },
    small_pic: [],
    maxHost: { type: Number, required: true },
    currentBookingState: [],
});

const roomModel = mongoose.model("rooms", roomSchema);

export default roomModel;