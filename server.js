import dotenv from 'dotenv'
import express from 'express'
import cors from "cors"
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import errorHandler from './middlewares/errorMiddleware.js'
import mongoose from 'mongoose'
import productRoute from './routes/productRoute.js'
dotenv.config()
const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(morgan('dev'))
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials:true
    })
)
console.log("james");
app.get("/", (req, res)=>{
    res.json("welcome")
})
console.log("jerry");
app.use('/api', productRoute)
app.use(errorHandler)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log(
                "server running on port", process.env.PORT + " and connected to the database"
            );
        })
    })
    .catch((err)=> console.log(err))