const express = require('express');
const app = express();
const db = require("./db");
const route = require("./routes/routes_ctrl");


app.use("/",route);

app.listen(3000, (req,err)=>{

    console.log("Server listening on Port");
})

