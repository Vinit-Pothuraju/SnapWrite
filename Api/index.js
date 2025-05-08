import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'
import mongoose from "mongoose";
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

mongoose.connect(process.env.MONGODB_CONN,{dbName:'SnapWrite'}).then(()=>console.log('DataBase connection Successfull')).catch((err)=>{console.log('Database not connected',err);})





app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
