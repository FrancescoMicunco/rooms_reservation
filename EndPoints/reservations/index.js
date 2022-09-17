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
            res.status(400).json({ error: error });
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

router
    .route("/:id")
    .get(async(req, res, next) => {
        try {
            const reservation = await reservationSchema.findById(req.params.id);
            if (reservation) {
                res.send(reservation);
            } else {
                res.send("Reservation not found");
            }
        } catch (error) {
            next(error);
        }
    })
    .delete(async(req, res, next) => {
        try {
            const reservation = await reservationSchema.findByIdAndDelete(
                req.params.id
            );
            console.log("Reservation correctly deleted!");
            if (reservation) {
                res.status(201).send("Reservation Deleted!");
            } else {
                res.send("Reservation Not Found");
            }
        } catch (error) {
            res.status(400).json({ error: error });
            next(error);
        }
    })

.put(async(req, res, next) => {
    try {
        const reservation = await reservationSchema.findByIdAndUpdate(
            req.params.id,
            req.body, { new: true }
        );
        if (reservation === null) {
            res.send("this reservation doesn't exist!");
        } else {
            res.send(reservation);
        }
    } catch (error) {
        next(error);
    }
});

export default router;