const express = require('express');
const app = express();


// const db = require("./db");
const country = require("./country/country_ctrl")

// app.use("/db",db);
app.use("/country/country_ctrl",country);

app.get("/home", (res,req)=>
{
    res.send("This is Home page")
});


app.listen(3000, (res,err)=>{

    console.log("Server listening on Port");
})