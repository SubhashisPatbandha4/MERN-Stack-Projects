const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(cookieParser())
dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json())
const USER = require("./model/userSchema");
app.use(require("./router/authentication"));//lining the router files to app.js
const PORT = process.env.PORT;


//middle ware

// middleware()

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

//
