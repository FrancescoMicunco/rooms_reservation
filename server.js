import express from "express";
import "dotenv/config";

import listEndpoints from "express-list-endpoints";
import mongoose from "mongoose";

const app = express();

const port = process.env.PORT || 3000;

// ============= global middlewares

app.use(express.json());

// ============= Endpoints

// ============= errors

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