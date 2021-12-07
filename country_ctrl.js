const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();


router.get("/country", (req,res)=>{
    res.send("hello Country")
});

module.exports=router;