import mongoose from "mongoose";

export const connectDB = async () => {
        await mongoose.connect('mongodb://localhost:27017/food-delivery-app')

                .then(() => console.log("database connection successful"))
}