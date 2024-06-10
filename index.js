const express=require("express");
const app=express();


// dotenv
require("dotenv").config();

const PORT=process.env.PORT || 3000;
// port

// middleware
app.use(express.json());

// Routeconst blog
const blog = require("./routes/blog");
// mounting
app.use("/api/v1",blog);
// db connection

const dbconnect = require("./config/database");
dbconnect();

app.listen(3000, () => {
    console.log(`App is running successfully on port ${PORT}`);
});
 

app.get("/",(req ,res)=>{
    res.send("this is homepage")
})