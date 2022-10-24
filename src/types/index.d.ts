type wordType = { id: number; word: string; pos: string };
type scoresListType = number[];
type categorizedWordsType = {
  [k: string]: wordType[];
};

export type worldListPromise = {
  wordList: wordType[];
};

export type scoresListPromise = {
  scoresList: scoresListType;
};

export type wordListCacheType = {
  words: categorizedWordsType;
  currentCount: number | null;
};

declare global {
  namespace Express {
    export interface Request {
      wordsList?: categorizedWordsType;
      scoresList?: scoresListType;
    }
  }
}
