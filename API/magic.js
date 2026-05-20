const express = require("express");

const route=express();
route.use(express.json());

route.get("/magic/cards",(req,res)=>{
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
route.get("/magic/card/:id",(req,res)=>{
    try {
        const {id}= req.params;
        fetch(`https://api.magicthegathering.io/v1/cards/${id}`)
        .then(response => response.json())
        .then(data =>{
            res.set("Content-Type","application/json");
            res.status(200).send(data);
        })
    } catch (error) {
        res.status(400).send("Something is wrong");
    }
    
})

route.get("/magic/card/:name",(req,res)=>{
    try {
        const {name}= req.params;
        fetch(`https://api.magicthegathering.io/v1/cards?name=${name}`)
        .then(response => response.json())
        .then(data =>{
            res.set("Content-Type","application/json");
            res.status(200).send(data);
        })
    } catch (error) {
        res.status(400).send("Something is wrong");
    }
})


module.exports=route;