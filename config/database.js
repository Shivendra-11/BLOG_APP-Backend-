const mongoose=require("mongoose");

require("dotenv").config();

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    }).then(console.log("db connected succesfully")).catch((error)=>{
      console.log("db facing error while connecting");
      console.error(error);
      process.exit(1);  
    })

    
}

module.exports=dbconnect;