import { Request, Response } from "express";
import { binarySearchFirstOccur } from "../../utils";
export default function getRanking(req: Request, res: Response) {
  const {
    scoresList,
    body: { score },
  } = req;

  const rank = binarySearchFirstOccur(scoresList!, score);
  res.json({
    rank: ((rank / scoresList!.length) * 100).toFixed(2),
  });
}
