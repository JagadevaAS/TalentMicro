const express = require('express');
const app = express();
const country = require("./country_ctrl");

app.use("/",country);







module.exports = app;