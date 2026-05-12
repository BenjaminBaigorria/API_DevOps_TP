const app = require("./API/index.js");
const dotenv = require("dotenv")

dotenv.config();

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server listen on ${PORT} PORT`);
})