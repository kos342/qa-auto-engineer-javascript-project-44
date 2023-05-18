import gameEngine from '../index.js';
import getRandomInRange from '../getRandomInRange.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (length, startNumber) => {
  const result = [];
  for (let i = 1; i < length ** 2; i += length) {
    result.push(startNumber + i);
  }
  return result;
};

const generateRound = () => {
  const randomArrLength = getRandomInRange(5, 10);
  const randomArrIndex = (getRandomInRange(5, randomArrLength) - 1);
  const randomStartNumber = getRandomInRange(0, 100);

  const progression = getProgression(randomArrLength, randomStartNumber);
  const answer = String(progression[randomArrIndex]);
  progression[randomArrIndex] = '..';
  const question = String(progression.join(' '));

  return [question, answer];
};

export default () => {
  gameEngine(gameDescription, generateRound);
};
