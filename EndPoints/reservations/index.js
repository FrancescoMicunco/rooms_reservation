import express from "express";
import reservationSchema from "../reservations/Schema.js";
import Rooms from "../rooms/roomModel.js";
import q2m from "query-to-mongo";
import { body, checkSchema, validationResult } from "express-validator";
import moment from "moment";
import { badRequestHandler } from "../../Middleware/errorHadler.js";

const router = express.Router();

router
    .route("/")
    .post(
        // body("customerEmail").isEmail(),
        // checkSchema({
        //     customerEmail: {
        //         isEmail: { bail: true },
        //         isLength: {
        //             errorMessage: "email must be at least 9 chars long",
        //             option: { min: 9 },
        //         },
        //     },
        // }),
        async(req, res, next) => {
            try {
                const reservation = await reservationSchema(req.body);
                console.log("reservation", reservation);
                if (res) {
                    const newReservation = await reservation.save();
                    res.status(201).send(newReservation._id);
                    console.log(newReservation.roomId);
                    // const temp = Rooms.findOne({ _id: newReservation.roomId[0] });

                    // temp.currentBookingState.push({
                    //     bookingId: reservation._id,
                    //     customerName: reservation.customerName,
                    //     fromdate: moment(reservation.startingDate).format("DD-MM-YYYY"),
                    //     toDate: moment(reservation.endingDate).format("DD-MM-YYYY"),
                    //     status: "booked",
                    // });
                    // temp.save();
                } else {
                    next(badRequestHandler);
                }
            } catch (error) {
                res.status(400).json({ error: error });
                next(error);
            }
        }
    )

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