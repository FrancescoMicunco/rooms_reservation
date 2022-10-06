import express from "express";
import roomModel from "../rooms/roomModel.js";
import q2m from "query-to-mongo";

const router = express.Router();

router
    .route("/")
    .post(async(req, res, next) => {
        try {
            const room = await roomModel(req.body);
            const { _id } = await room.save();
            res.status(201).send({ _id });
        } catch (error) {
            next(error);
        }
    })

.get(async(req, res, next) => {
    try {
        const rooms = await roomModel.find({}).populate("reservation");
        return res.status(200).send(rooms);
    } catch (error) {
        next(error);
    }
});

router.route("/:id").get(async(req, res, next) => {
    try {
        const rooms = await roomModel
            .findById(req.params.id)
            .populate("reservations");

        if (rooms) {
            res.send(rooms);
        } else {
            next({ error: "Room not found" });
        }
    } catch (error) {}
});

export default router;