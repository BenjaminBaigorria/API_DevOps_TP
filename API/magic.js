import express from "express";

const route=express();
route.use(express.json());

route.get("/magic",(req,res)=>{
    try {

        fetch("https://api.magicthegathering.io/v1/cards")
        .then(response => response.json())
        .then(data =>{
            res.set("Content-Type","application/json");
            res.status(200).send(data);
        })
    } catch (error) {
        res.status(400).send("Something is wrong");
    }
    
})

export default route;