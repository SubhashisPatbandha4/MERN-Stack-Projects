const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json())
const USER = require("./model/userSchema");
app.use(require("./router/authentication"));//lining the router files to app.js
const PORT = process.env.PORT;

const middleware = (req, resp, next) => {
  console.log("middlwwareeeeeeeeeeee");
  next();
};
app.get("/login", (req, resp) => {
  resp.cookie("test","hello")
  resp.send("login from server")
})

//middle ware

// middleware()

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

//
