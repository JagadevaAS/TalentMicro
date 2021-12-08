const express = require('express');
const app = express();
const db = require("../db");
const players = require("./cricketers_ctrl");

app.use("/",players);


module.exports = app;