const express = require("express");
const path = require("path");

const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
const router = require("express").Router();



app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const opts = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false};
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", opts);


app.use(require("./routes/api.js"));
app.use(require("./routes/index.js"));



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});