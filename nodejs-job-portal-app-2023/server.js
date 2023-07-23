// Packages imports -----
import express from "express";
import dotenv from "dotenv"; 
import colors from "colors";
import cors from "cors";
import morgan from "morgan";

// Files imports -----
import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js"

// DOT ENV config -----
dotenv.config();

// Mongodb Connection -----
connectDB();

// Rest Object -----
const app = express();

// Middleware -----
app.use(express.json());

// Cors Enable - cors ko enable ker legay yaha pe, simple hame cors ko call ker legay -----
app.use(cors());
// or morgan ko bhi simple cors ki tarah ker legay -----
app.use(morgan("dev"))

// Routes -----
app.use('/api/v1/test', testRoutes);

// Port -----
const PORT = process.env.PORT || 8080; 

// Listen -----
app.listen(PORT, () => {
    console.log(`Node Server Running in ${process.env.DEV_MODE} Mode on Port no. ${PORT}`.bgBlue.white)
})