import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();
var port = +process.env.PORT || 4001;
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
