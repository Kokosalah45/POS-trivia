export type wordType = { id: number; word: string; pos: string };
export type promiseData = {
  wordList: wordType[];
  scoresList: number[];
};
export type wordListCacheType = {
  words: {
    [k: string]: wordType[];
  };
  currentCount: number | null;
};
