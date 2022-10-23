import { Router } from "express";
import wordsRouter from "./wordsRouter";
import { validateCache } from "../middlewares";
const apiRouter = Router();

apiRouter.use("/words", validateCache, wordsRouter);

apiRouter.get("/", (req, res) => {
  const hostName =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://" + process.env.RAILWAY_STATIC_URL;
  res.json({
    words: {
      href: `${hostName}/api/words`,
      type: "GET",
    },
    rank: {
      href: `${hostName}/api/rank`,
      type: "POST",
    },
  });
});

export default apiRouter;
