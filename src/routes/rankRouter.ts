import { Router } from "express";
import { getRanking } from "../controllers/rank";
import { loadScores } from "../middlewares";
const rankRouter = Router();
rankRouter.use(loadScores);
rankRouter.get("/", (req, res) => {
  res.json({
    ranks: req.scoresList,
  });
});
rankRouter.post("/", getRanking);

export default rankRouter;
