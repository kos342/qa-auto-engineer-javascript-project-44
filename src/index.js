import readlineSync from 'readline-sync';

export default (gameTerms, getQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n${gameTerms}`);
  for (let round = 1; round <= 3; round += 1) {
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    switch (answer === correctAnswer) {
      case true: {
        console.log('Correct!');
        break;
      }
      case false: {
        return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
      }
      default: {
        break;
      }
    }
  }
  return console.log(`Congratulations, ${username}!`);
};
