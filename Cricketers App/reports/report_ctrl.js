const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
const db = require("../db");

router.get("/country", (req,res)=>{
    app.use("/db",db);
    db.query("select * from player_details"), (req, result)=>
    {
        res.send(result)
    }
});

module.exports=router;