// MODEL Pattern h jo ke database ko use kerta h
// mongoose ko yaha per import ker legay
import mongoose from "mongoose";
import colors from "colors";

// hmne mongoose ko import ker liya h iske base pe hm database se connect ho jayegay
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONOGDB_URL);
        console.log(`Connected to MongoDB Database ${mongoose.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`MongoDB Error ${error}`.bgRed.white);
    }
}

export default connectDB;