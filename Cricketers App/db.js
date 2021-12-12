const mysql = require('mysql');
const express = require('express');
const app = express();



function connect(){}
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "password@123",
          database: "cricket"
        });

        con.connect(function(err) {
            if (err)
            {
                console.console.log("Error");
            }
            
              else
              console.log("This is running from DB.js file");
          });
    
    

      module.exports = con;