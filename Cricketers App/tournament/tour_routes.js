const express = require('express');
const app = express();
const db = require("../db");
const tour = require("./tour_ctrl");

app.use("/",tour);







module.exports = app;