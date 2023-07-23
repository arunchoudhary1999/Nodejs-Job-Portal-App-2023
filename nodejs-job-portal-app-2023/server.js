// imports -----
import express from "express";
import dotenv from "dotenv"; // isko import kerne ke bad configration bhi kerna padta hai,
// tabhi hm is .env mtlb environmental variable ka use ker payegay
import colors from "colors";
import connectDB from "./config/db.js";

// DOT ENV config - configration hame starting me kuch is tarah se kerna hoga
dotenv.config();

// Mongodb Connection
connectDB();

// Rest Object
const app = express();

// Routes
app.get("/", (req, res) => {
    res.send("<h1>Welcome to Job Portal...</h1>")
})

// Port
const PORT = process.env.PORT || 8080; 

// Listen
app.listen(PORT, () => {
    console.log(`Node Server Running in ${process.env.DEV_MODE} Mode on Port no. ${PORT}`.bgBlue.white)
})