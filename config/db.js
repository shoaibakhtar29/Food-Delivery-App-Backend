import mongoose from "mongoose";
import "dotenv/config"
const db_url = process.env.DB_URL;
export const connectDB = async () => {
        await mongoose.connect(db_url)

                .then(() => console.log("database connection successful"))
}