import { checkSchema } from "express-validator";

export const reservationValidator = checkSchema({
    roomName: { in: ["body"],
        isLength: {
            options: { min: 1 },
            errorMessage: "You must choice a room",
        },
    },
    customerName: { in: ["body"],
        isLength: {
            options: { min: 2 },
            errorMessage: "You must provide a valid Name",
        },
    },
    customerEmail: { in: ["body"],
        isLength: {
            options: { min: 5 },
            errorMessage: "You must provide a valid email address",
        },
        isEmail: {
            errorMessage: "You must provide a valid email address",
        },
    },
    startingDate: { in: ["body"],
        isLength: {
            options: { min: 2 },
            errorMessage: "You must provide check in date",
        },
    },
    endingDate: { in: ["body"],
        isLength: {
            options: { min: 2 },
            errorMessage: "You must provide check out date",
        },
    },
    hostNumber: { in: ["body"],
        isLength: {
            options: { min: 1 },

            errorMessage: "You must provide a host number",
        },
        isInt: {
            errorMessage: "You must provide a valind integer number",
        },
    },
    customerPhoneNumber: { in: ["body"],
        isLength: {
            options: { min: 6 },

            errorMessage: "You must provide a phone number",
        },
        isInt: {
            errorMessage: "You must provide a valid phone number",
        },
    },
});