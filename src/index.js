import { welcome, askName, askQuestion } from './cli.js';

const roundsCount = 3;

const createGame = (game, description) => () => {
  welcome();
  const name = askName();
  console.log(description);

  let correctAnswersCount = 0;
  while (correctAnswersCount < roundsCount) {
    const { question, correctAnswer } = game();

    console.log(`Question: ${question}`);
    const userAnswer = askQuestion('Your answer:');

    if (userAnswer === String(correctAnswer)) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default createGame;
