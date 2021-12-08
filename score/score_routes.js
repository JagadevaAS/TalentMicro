const express = require('express');
const app = express();
const db = require("../db");
const score = require("../score/score_ctrl");

app.use("/",score);

module.exports = app;