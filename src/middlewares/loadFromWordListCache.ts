import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { wordListCacheType, worldListPromise } from "../types/index";
const wordListCache: wordListCacheType = {
  words: {
    noun: [],
    adverb: [],
    adjective: [],
    verb: [],
  },
  currentCount: null,
};

export default async function loadWordListFromCache(
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  const { data } = await axios.get(
    `http://localhost:${process.env.PORT || 5000}/wordsList.json`
  );

  const { wordList } = data as worldListPromise;
  if (
    !wordListCache.currentCount ||
    wordList.length < wordListCache.currentCount
  ) {
    wordList.forEach((word) => wordListCache.words[word.pos].push(word));
  } else {
    const lastEntry = wordList.pop();
    if (lastEntry) {
      wordListCache.words[lastEntry.pos].push(lastEntry);
    }
  }

  req.wordsList = wordListCache.words;

  next();
}
