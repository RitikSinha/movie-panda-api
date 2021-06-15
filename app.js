require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

//routes 
const movieRoute = require('./routes/movieRoute');
//middlewares
app.use(cors());
app.use(express.json());require('dotenv').config();
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
  }));


  //main app

app.use("/api",movieRoute);  


app.get("/",(req,res)=>{
   return  res.json( {msg :"moviepanda"});
})

//connecting to database
mongoose.connect(process.env.DATABASE,
    {useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true}
    ).then(()=>console.log("connected to database"))
    .catch((err)=>console.log(err));


 // //ports are runnning     
 const PORT = process.env.PORT || 8080;
 app.listen(PORT,()=>console.log(`server is running on http://localhost:${PORT}`));   

