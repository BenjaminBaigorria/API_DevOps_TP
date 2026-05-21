const express= require("express");
const magic = require("./magic.js");

const app=express();
app.use(express.json());

//Routes
app.use(magic);

app.get("/",(req,res)=>{
    try {
        res.set("Content-Type","text/plain");
        res.status(200).send("API funcionando, puedes probar los endpoints: \n/hello\n/magic/cards\n/magic/card/:id\n/magic/cardname/:name\n/error");
    } catch (error) {
        res.status(400).send("Something is wrong");
    }
    
})

app.get("/hello",(req,res)=>{
    try {
        res.set("Content-Type","text/plain");
        res.status(200).send("Hello world");
    } catch (error) {
        res.status(400).send("Something is wrong");
    }
    
})
app.get("/error", (req, res) => {
    res.status(500).json({
        error: "Fallo intencional"
    });
});



module.exports=app;