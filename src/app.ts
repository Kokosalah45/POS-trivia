import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";

import apiRouter from "./routes/apiRouter";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", apiRouter);
app.get("/", async (req: Request, res: Response) => {
  // for now
  res.redirect("/api");
});

app.listen(process.env.PORT || 5000, () => console.log("listenin..."));
