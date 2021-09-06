const express = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");


// Mongo database connection
dotenv.config();
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to Database!!")
})

// middleware


app.listen(8800, () => {
    console.log("Backend server is running!!!")
})