import express from "express";
import magic from "./magic.js";

const app=express();
app.use(express.json());

//Routes
app.use(magic);

app.get("/hello",(req,res)=>{
    try {
        res.set("Content-Type","text/plain");
        res.status(200).send("Hello world");
    } catch (error) {
        res.status(400).send("Something is wrong");
    }
    
})

export default app;