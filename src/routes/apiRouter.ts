import { Router } from "express";
import wordRouter from "./wordRouter";
import { validateCache } from "../middlewares";
const apiRouter = Router();

apiRouter.use("/word", validateCache, wordRouter);

apiRouter.get("/", (req, res) => {
  res.json({
    words: {
      href: "http://localhost:5000/api/words",
      type: "GET",
    },
    rank: {
      href: "http://localhost:5000/api/rank",
      type: "POST",
    },
  });
});

export default apiRouter;
