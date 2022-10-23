import { Router } from "express";
import wordRouter from "./wordRouter";
import { validateCache } from "../middlewares";
import os from "os";
const apiRouter = Router();

apiRouter.use("/word", validateCache, wordRouter);

apiRouter.get("/", (req, res) => {
  const hostName = os.hostname;

  res.json({
    words: {
      href: `${hostName}/api/words`,
    },
    rank: {
      href: `${hostName}/api/rank`,
      type: "POST",
    },
  });
});

export default apiRouter;
