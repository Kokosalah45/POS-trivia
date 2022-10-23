import { Router } from "express";
import { getRandomWords } from "../controllers/word";

const wordsRouter = Router();

wordsRouter.get("/", getRandomWords);

export default wordsRouter;
