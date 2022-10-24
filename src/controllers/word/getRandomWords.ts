import { shuffleArray } from "../../utils";
import { Request, Response } from "express";
export default async function getRandomWords(req: Request, res: Response) {
  //@ts-ignore
  const allWords = req.wordsList;
  let wordsTuple = await Promise.all([
    shuffleArray(allWords!.noun),
    shuffleArray(allWords!.adverb),
    shuffleArray(allWords!.adjective),
    shuffleArray(allWords!.verb),
  ]);
  const guaranteed4Words = [];
  guaranteed4Words.push(wordsTuple[0].shift());
  guaranteed4Words.push(wordsTuple[1].shift());
  guaranteed4Words.push(wordsTuple[2].shift());
  guaranteed4Words.push(wordsTuple[3].shift());

  let restOfWords = [];
  //2 2 0 4  or 2 2 4 4 or 0 0 4 4
  while (
    restOfWords.length < 6 &&
    wordsTuple.filter((pos) => pos.length !== 0).length !== 0
  ) {
    const randomWord =
      wordsTuple[Math.floor(Math.random() * wordsTuple.length)].shift();
    restOfWords.push(randomWord);
    //@ts-ignore
    wordsTuple = wordsTuple.filter((pos) => pos.length !== 0);
  }
  const shuffleDArray = await shuffleArray([
    ...guaranteed4Words,
    ...restOfWords,
  ]);
  res.json(shuffleDArray);
}
