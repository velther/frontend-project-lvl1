import { welcome, askName, askQuestion } from './cli.js';

const runGame = (rounds, description) => {
  welcome();
  const name = askName();
  console.log(description);

  // eslint-disable-next-line no-restricted-syntax
  for (const { question, correctAnswer } of rounds) {
    console.log(`Question: ${question}`);
    const userAnswer = askQuestion('Your answer:');

    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
