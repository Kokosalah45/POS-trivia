import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { scoresListPromise } from "../types";

export default async function loadScores(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { data } = await axios.get(
    `http://localhost:${process.env.PORT || 5000}/scoresList.json`
  );
  const { scoresList } = data as scoresListPromise;
  req.scoresList = [...scoresList].sort((a, b) => a - b);
  next();
}
