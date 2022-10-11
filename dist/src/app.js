import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import router from "./routers/index.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";
var app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);
//CORS settings
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
export default app;
