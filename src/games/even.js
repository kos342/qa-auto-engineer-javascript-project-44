import readlineSync from 'readline-sync';

function num() {
	const number = (Math.round(Math.random() * 100));
	return number;
}

export default function game() {
	const userName = readlineSync.question('May I have your name?');
	console.log(`Hello, ${userName}!`);
	console.log('Answer "yes" if the number is even, otherwise answer "no".');
	for (let i = 0; i < 3; i += 1) {
		const numsave = num();
		const quest = readlineSync.question(`${'Question: '}${numsave}${'\nYour answer: '}`);
		if ((numsave % 2 === 0 && quest === 'yes') || (numsave % 2 !==0  && quest === 'no')) {
			console.log('Correct!')
		}
		else {
			console.log(`${quest} is wrong answer;(. Correct answer was 'no'.\n Let's try again, ${userName}!`);
			return;
		}
	}
	console.log(`Congratulations, ${userName}!`);
}
