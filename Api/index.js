import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'
import mongoose from "mongoose";
import AuthRoute from "./Routes/Auth.route.js";
mongoose
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin:process.env.FRONTEND_URL,
  credentials:true
}))


// Route setup
app.use('/api/auth',AuthRoute)

mongoose.connect(process.env.MONGODB_CONN,{dbName:'Snapwrite'}).then(()=>console.log('DataBase connection Successfull')).catch((err)=>{console.log('Database not connected',err);})





app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});


app.use((err,req,res,next)=>{
  const statusCode=err.statusCode||500
  const message=err.message||'Internal sever error.'
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  })

})