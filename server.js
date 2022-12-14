import express from "express";
import "dotenv/config";
import roomRouter from "./EndPoints/rooms/index.js";
import resRouter from "./EndPoints/reservations/index.js";
import customerRouter from "./EndPoints/customers/index.js";
import listEndpoints from "express-list-endpoints";
import mongoose from "mongoose";
import {
    badRequestHandler,
    notFoundHandler,
    genericErrorHandler,
} from "./Middleware/errorHadler.js";

const app = express();

const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});

// ============= global middlewares

app.use(express.json());

// ============= Endpoints

app.use("/rooms", roomRouter);
app.use("/reservation", resRouter);
app.use("/customer", customerRouter);

// ============= errors

app.use(badRequestHandler);
app.use(notFoundHandler);
app.use(genericErrorHandler);

// ============= Connections
const connection = process.env.DB_CONNECTION;
mongoose
    .connect(connection)

.then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
            console.table(listEndpoints(app));
        });
    })
    .catch((error) => {
        console.log(error);
    });

mongoose.connection.on("connected", () => {
    console.log("DB correctly connected");
});
mongoose.connection.on("error", () => {
    console.log("DB uncorrectly connected");
});