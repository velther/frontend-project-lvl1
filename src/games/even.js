import { welcome, askName, askQuestion } from '../cli.js';

const correctAnswersCountToWin = 3;

const brainEven = () => {
  const numberToCheck = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = numberToCheck % 2 ? 'no' : 'yes';

  console.log(`Question: ${numberToCheck}`);
  const userAnswer = askQuestion('Your answer:');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
  return false;
};

const gameRunner = () => {
  welcome();
  const name = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswersCount = 0;
  while (correctAnswersCount < correctAnswersCountToWin) {
    if (brainEven()) {
      correctAnswersCount += 1;
      console.log(`Congratulations, ${name}!`);
    } else {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
};

export default gameRunner;
