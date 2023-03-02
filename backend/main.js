const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    res.send("This is Homepage")
})


const port = 4040;
app.listen(port, (req, res)=>{
    console.log(`server is running at port: ${port}`)
})