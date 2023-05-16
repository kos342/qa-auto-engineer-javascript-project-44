import readlineSync from 'readline-sync';

const gameEngine = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const rounds = 3;

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". \nLet's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
export default gameEngine;
