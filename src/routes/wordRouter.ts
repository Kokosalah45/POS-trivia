import { Router } from "express";
import { getRandomWords } from "../controllers/word";

const wordRouter = Router();

wordRouter.get("/", getRandomWords);

export default wordRouter;
