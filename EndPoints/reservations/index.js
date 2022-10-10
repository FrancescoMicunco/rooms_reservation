import express from "express";
import reservationSchema from "../reservations/Schema.js";
import { reservationValidator } from "../../Middleware/validation.js";
import Rooms from "../rooms/roomModel.js";
import q2m from "query-to-mongo";
import { body, check, validationResult } from "express-validator";
import moment from "moment";
import { badRequestHandler } from "../../Middleware/errorHadler.js";

const router = express.Router();

router
    .route("/")
    .post(reservationValidator, async(req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const reservation = await reservationSchema(req.body);
            console.log("reservation", reservation);
            if (res) {
                const newReservation = await reservation.save();
                res.status(201).send(newReservation._id);
                console.log("new reservation roomId", newReservation.roomId);
                const temp = await Rooms.findById(newReservation.roomId);

                temp.currentBookingState.push({
                    bookingId: reservation._id,
                    customerName: reservation.customerName,
                    fromdate: reservation.startingDate,
                    toDate: reservation.endingDate,
                    status: "booked",
                });
                temp.save();
            } else {
                next(badRequestHandler);
            }
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
        if (reservation) {
            console.log("reservation to delete", reservation._id);
            res.status(202).send("Reservation Deleted!");
            // 1) cerca la stanza che contiene la prenotazione
            const roomIdToCheck = reservation.roomId;
            const tempRoomArray = await Rooms.findById(roomIdToCheck);
            console.log("RoomArray: " + tempRoomArray);
            // 2) cerca la prenotazione nell'awrray delle prenotazioni
            const tempCurrentReservation = tempRoomArray.currentBookingState;
            const reservationToDeleteIndex = tempCurrentReservation.findIndex(
                tempCurrentReservation.bookingId === reservation._id
            );
            console.log("index of reservation to delete", reservationToDeleteIndex);
            // 3) cancella la prenotazione

            // console.log("booking to delete on room current booking", tempRoom);
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