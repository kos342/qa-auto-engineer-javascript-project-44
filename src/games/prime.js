import gameEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (checkNumber) => {
  for (let i = 2; i < checkNumber - 1; i += 1) {
    if (Number.isInteger(checkNumber / i)) {
      return true;
    }
  }
  return false;
};

const generateRound = () => {
  const randomNumber = getRandomInRange(2, 101);
  const answer = isPrime(randomNumber) === true ? 'no' : 'yes';

  return [randomNumber, answer];
};

export default () => {
  gameEngine(gameDescription, generateRound);
};
