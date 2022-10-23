import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { wordListCacheType, promiseData } from "../types";
const wordListCache: wordListCacheType = {
  words: {
    noun: [],
    adverb: [],
    adjective: [],
    verb: [],
  },
  currentCount: null,
};

export default async function validateCache(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { data } = await axios.get(
    `http://localhost:${process.env.PORT || 5000}/db.json`
  );

  const promiseData = data as promiseData;
  if (
    !wordListCache.currentCount ||
    promiseData.wordList.length < wordListCache.currentCount
  ) {
    promiseData.wordList.forEach((word) =>
      wordListCache.words[word.pos].push(word)
    );
  } else {
    const lastEntry = promiseData.wordList.pop();
    if (lastEntry) {
      wordListCache.words[lastEntry.pos].push(lastEntry);
    }
  }
  //@ts-ignore
  req.wordList = wordListCache.words;

  next();
}
