import mongoose from "mongoose";

const { Schema, model } = mongoose;

const customerSchema = new Schema({
    customerFirstName: { type: "string", required: true },
    customerLastName: { type: "string", required: true },
    customerEmail: { type: "string", required: true },
    customerPhoneNumber: { type: "number", required: true },
});

export default model("customer", customerSchema);