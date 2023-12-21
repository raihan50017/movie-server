import { Server } from "http";
import config from "config";
import app from "./app";
import { connectDB } from "./db/db";

const port: number = config.get<number>("server.port") || 3000;

const startServer = async () => {
  try {
    const dbClient = connectDB();
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error: any) {
    console.log(error.message);
  }
};
startServer();
