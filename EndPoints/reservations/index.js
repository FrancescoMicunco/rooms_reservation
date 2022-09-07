import express from "express";
import reservationSchema from "../reservations/Schema.js";
import q2m from "query-to-mongo";

const router = express.Router();

router
    .route("/")
    .post(async(req, res, next) => {
        try {
            const reservation = await reservationSchema(req.body);
            const { _id } = await reservation.save();
            res.status(201).send({ _id });
        } catch (error) {
            next(error);
        }
    })

.get(async(req, res, next) => {
    try {
        const reservation = await reservationSchema.find({});
        res.status(200).send(reservation);
    } catch (error) {
        next(error);
    }
});
export default router;