import express from "express";
import customerSchema from "../customers/customerSchema.js";

const router = express.Router();

router
    .route("/")
    .get(async(req, res, next) => {
        try {
            const customers = await customerSchema.find({});
            if (res) {
                res.status(200).send(customers);
                console.log(customers);
            } else {
                console.log("customers not found!");
            }
        } catch (error) {
            next(error);
        }
    })
    .post(async(req, res, next) => {
        try {
            const customer = await customerSchema(req.body);

            if (res) {
                const { _id } = await customer.save();
                res.status(201).send({ _id });
            } else {
                console.log("impossible to create customer");
            }
        } catch (error) {
            res.status(400).json({ error: error });
            next(error);
        }
    });

router
    .route("/:id")
    .get(async(req, res, next) => {
        try {
            const customer = await customerSchema.findById(req.params.id);
            console.log("customer", customer);
            if (customer) {
                res.send(customer);
            } else {
                res.send("This customer doesn't exist!");
            }
        } catch (error) {
            next(error);
        }
    })
    .put(async(req, res, next) => {
        try {
            const customer = await customerSchema.findByIdAndUpdate(
                req.params.id,
                req.body, { new: true }
            );
            if (customer != null) {
                res.send(customer);
            } else {
                res.send("this customer doesn't exist!");
            }
        } catch (error) {
            next(error);
        }
    });
export default router;