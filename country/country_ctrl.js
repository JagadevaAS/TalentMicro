const { Router } = require('express');
const express = require('express');
const app = express();
const mysql = require("mysql")
const router = express.Router();
const db = require("../db");


router.get("/country", (req,res)=>{

      db.query("select * from country_details", (err, result)=>
    {
        res.status(200).json(result)
    })
});




module.exports=router;