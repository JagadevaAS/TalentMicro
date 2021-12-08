const express = require('express');
const app = express();
const db = require("../db");
const country = require("../country/country_routes");
const players = require("../cricketers/cricketers_routes")
const score = require("../score/score_routes");
const tour = require("../tournament/tour_routes")



app.use("/",country);
app.use("/",players);
app.use("/",score);
app.use("/",tour);




module.exports = app;