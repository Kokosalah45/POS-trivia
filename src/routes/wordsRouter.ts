import { Router } from "express";
import { getRandomWords } from "../controllers/word";
import { loadFromWordListCache } from "../middlewares";

const wordsRouter = Router();
wordsRouter.use(loadFromWordListCache);
wordsRouter.get("/", getRandomWords);

export default wordsRouter;
