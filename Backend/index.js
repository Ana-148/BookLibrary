import express from "express"; //because it has been treated as a module
import {mongoDBURL} from "./config.js";
import {Book} from "./Models/bookModel.js";
import booksRoute from "./Routes/booksRoute.js";
import cors from "cors";
const app=express();
import mongoose from "mongoose";

//Middleware for parsing requrest body
app.use(express.json());

//Middleware for handling CORS policy
//Option 1: Allow all origins with default of cors(*)
app.use(cors());
//Option 2: Allow custom origins
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type'],
//     })
// )


app.get("/",(req,res)=>{
    console.log(req);;
    return res.status(234).send("Welcome");
})

app.use("/books",booksRoute);


mongoose.connect(mongoDBURL).then(res=>{ //conected with mongodb compass
    console.log("Database connected");
    app.listen(2000, ()=>{   //listen only if the database is connected
        console.log("Server started");
    })
}).catch(err=>{
console.log("Database not connected",err);
})




