const app = require("./API/index.js");
const dotenv = require("dotenv")

dotenv.config();

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server listen on ${PORT} PORT`);
})