import { Router } from "express";
import wordRouter from "./wordRouter";
import { validateCache } from "../middlewares";
const apiRouter = Router();

apiRouter.use("/word", validateCache, wordRouter);

apiRouter.get("/", (req, res) => {
  const domain =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : process.env.RAILWAY_STATIC_URL;
  res.json({
    words: {
      href: `${domain}/api/word`,
      type: "GET",
    },
    rank: {
      href: `${domain}/api/rank`,
      type: "POST",
    },
  });
});

export default apiRouter;
