import mongoose from "mongoose";
import  config  from "config";

const DB_URL = config.get<string>("dbConfig.url");

const connectDB = async () =>{
    mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URL);
};

export {connectDB};