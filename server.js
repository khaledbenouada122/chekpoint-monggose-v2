 const express = require("express")
 const app = express()
 const mongoose = require("mongoose")
 app.use(express.json())
//  mongoose.connect("mongodb+srv://khaled:97854264@cluster0.nia6ds3.mongodb.net/workshop-mongos?retryWrites=true&w=majority",(err)=>{
//  if(err) throw err
//  else  console.log("mongoose is connect")
//  })

 mongoose.connect(
   "mongodb+srv://khaled1:97854264@cluster0.nia6ds3.mongodb.net/?retryWrites=true&w=majority",
   
 )
 .then(()=>console.log('connected'))
 .catch(e=>console.log(e));




 app.use('/',require("./routes/useRoutes.js"))
const port = 4050
 app.listen(port,error=>{
    if (error) throw error 
    else {
        console.log("conexion with poort : 4050")
    }

 })