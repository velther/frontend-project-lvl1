import readlineSync from 'readline-sync';

const runGame = (rounds, description) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log(description);

  // eslint-disable-next-line no-restricted-syntax
  for (const { question, correctAnswer } of rounds) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer:').trim();

    if (userAnswer === correctAnswer) {
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
