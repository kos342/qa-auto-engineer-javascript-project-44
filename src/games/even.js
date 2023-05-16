import gameEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (checkNumber) => checkNumber % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomInRange(0, 10);
  const answer = isEven(randomNumber) === true ? 'yes' : 'no';
  const question = String(randomNumber);
  return [question, answer];
};

export default () => {
  gameEngine(gameDescription, generateRound);
};
