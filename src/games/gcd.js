import gameEngine from "../index.js";
import getRandomInRange from "../getRandomInRange.js";

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  } return getGcd(num2 % num1, num1);
};

const generateRound = () => {
  const num1 = getRandomInRange(0, 100);
  const num2 = getRandomInRange(0, 100);

  const question = String(`${num1} ${num2}`);
  const answer = String(getGcd(num1, num2));

  return [question, answer];
};

export default () => {
  gameEngine(gameDescription, generateRound);
};
