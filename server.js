require("dotenv").config();
const express = require("express");
const morgan =require("morgen");

const app = express();

app.use(morgen("dev"));
app.use((req,res,next) => {
    console.log("something");
    next();
});

//Get all Restaurants

app.get("/api/v1/restaurants",(req,res) =>{
    console.log("route handler ran");
    res.status(200).json({
      status:"success",
      data: {
        restaurant:["mcdonalds","wendys"],
      },
    });
});
//Get a Restaurants

app.get("/api/v1/restaurants/:restaurantid",(req,res) =>{
    consolole.log(req,params);
});

//Create a Restaurant

app.post("/api/v1/restaurants",(req,res) =>{
    console.log(req);
});

const port = process.env.PORT || 3001;
app.listen(port,() =>{






console.log("server is up and listing on port $(port)");
});