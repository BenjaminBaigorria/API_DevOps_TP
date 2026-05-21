const express = require("express");

const route=express();
route.use(express.json());

route.get("/magic/cards",(req,res)=>{
    try {

        fetch("https://api.magicthegathering.io/v1/cards/130550")
        .then(response => response.json())
        .then(data =>{
            res.set("Content-Type","application/json");
            res.status(200).send(data);
        })
    } catch (error) {
        res.status(400).send("It was not possible to bring the cards");
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
        res.status(400).send("It was not possible to bring the selected card");
    }
    
})

route.get("/magic/cardname/:name",(req,res)=>{
    try {
        const {name}= req.params;
        fetch(`https://api.magicthegathering.io/v1/cards?name=${name}`)
        .then(response => response.json())
        .then(data =>{
            res.set("Content-Type","application/json");
            res.status(200).send(data);
        })
    } catch (error) {
        res.status(400).send("It was not possible to bring the selected card by name");
    }
})


module.exports=route;