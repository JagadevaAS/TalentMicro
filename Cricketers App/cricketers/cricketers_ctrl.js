const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
const db = require("../db");

router.get("/players", (req,res)=>{
    db.query("select * from player_details", (err, result)=>

    
    {
        const response = {
            status: 200,
            message: 'Fetched the players details succesfully',
            data: result        };
        res.json(response)
     
    })
});


module.exports=router;