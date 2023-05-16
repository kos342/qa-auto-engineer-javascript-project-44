import startGame from '../index.js'

export default () => {
	const gameTerms = 'What is the result of the expression?';
	const getQuestion = () => {
		const getOperator = () => {
			const randomValue = Math.ceil(Math.random() * 3);
			let mathOperator = '';

			switch (randomValue) {
				case 1: {
					mathOperator = '+';
					break;
				}
				case 2: {
					mathOperator = '-';
					break;
				}
				case 3: {
					mathOperator = '*';
					break;
				}
				default: 
					break;
			};
			const number1 = Math.ceil(Math.random() * 100);
			const number2 = Math.ceil(Math.random() * 100);
			const operator = getOperator();
			const expression = `${number1} ${operator} ${number2}`;

			return expression;
		};

		const getCorrectAnswer = (value) => {
			const array = value.split(' ');
			const [number1, operator, number2] = array;
			let correctAnswer = 0;

			switch (operator) {
				case '+': {
					correctAnswer = +number1 + +number2;
					break;
				}
				case '-': {
					correctAnswer = +number1 - +number2;
					break;
				}
				case '*': {
					correctAnswer = +number1 * +number2;
					break;
				}
				default:
					break;
			};

			startGame(gameTerms, getQuestion, getCorrectAnswer);
		};
	}
}
