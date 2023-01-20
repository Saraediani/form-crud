import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

import router from "./src/routers/users.js";


const app = express();

app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/', router,)
app.use("*", (req, res) => {
  res.status(404).json({ error: true, message: "Route does not exist" });
});


export default app;