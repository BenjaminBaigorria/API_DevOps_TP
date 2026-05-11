import express from "express";

const app=express();
app.use(express.json());

app.get("/hello",(req,res)=>{
    try {
        res.set("Content-Type","text/plain");
        res.status(200).send("Hello world");
    } catch (error) {
        res.status(400).send("Something is wrong");
    }
    
})

export default app;