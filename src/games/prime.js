import runGame from '../index.js';
import { getRandomFromRange, generateRounds } from '../utils.js';
import { DEFAULT_ROUNDS_COUNT } from '../const.js';

const isPrime = (number) => {
  let divisor = 2;

  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }

    divisor += 1;
  }

  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const brainPrime = () => {
  const question = getRandomFromRange(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  runGame(generateRounds(DEFAULT_ROUNDS_COUNT, brainPrime), gameDescription);
};
