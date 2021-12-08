const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
const db = require("../db");

router.get("/players", (req,res)=>{
    db.query("select * from player_details", (err, result)=>
    {
        res.send(result)
    })
});


module.exports=router;