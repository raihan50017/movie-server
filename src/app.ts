import express, { Application, Request, Response } from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import { AllRouters } from "./routes";

const app: Application = express();

app.use("/static", express.static("public"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
app.use(AllRouters);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, server is running" });
});

export default app;
