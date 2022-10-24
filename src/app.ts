import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import apiRouter from "./routes/apiRouter";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", apiRouter);
app.get("/", async (req: Request, res: Response) => {
  res.redirect("/api"); // for now
});

app.listen(process.env.PORT || 5000, () => console.log("listenin..."));
