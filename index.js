import app from "./API/index.js";
import dotenv from "dotenv"

dotenv.config();

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server listen on ${PORT} PORT`);
})