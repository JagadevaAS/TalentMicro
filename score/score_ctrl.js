const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
const db = require("../db");

router.get("/score", (req,res)=>{
    db.query("select * from score_details", (err, result)=>
    {
        const response = {
            status: 200,
            message: 'Fetched the Score details succesfully',
            data: result        };
        res.json(response)
     
    })
});

module.exports=router;