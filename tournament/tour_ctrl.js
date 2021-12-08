const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
const db = require("../db");

router.get("/tour", (req,res)=>{
    db.query("select * from tournament_type", (err, result)=>
    {
        res.send(result)
    })
});

module.exports=router;