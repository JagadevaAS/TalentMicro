const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
const db = require("../db");

router.get("/tour", (req,res)=>{
    db.query("select * from tournament_type", (err, result)=>
    {
        const response = {
            status: 200,
            message: 'Fetched the tournament details succesfully',
            data: result        };
        res.json(response)
    })
});

module.exports=router;