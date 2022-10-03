import { body } from "express-validator";

const reservationValidator = [body("customerName")];