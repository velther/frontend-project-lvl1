import runGame from '../index.js';
import { getRandomFromRange, generateRounds } from '../utils.js';
import { DEFAULT_ROUNDS_COUNT } from '../const.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divisor = 2;

  while (divisor < Math.floor(Math.sqrt(number))) {
    if (number % divisor === 0) {
      return false;
    }

    divisor += 1;
  }

  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const makeRound = () => {
  const question = getRandomFromRange(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  runGame(generateRounds(DEFAULT_ROUNDS_COUNT, makeRound), gameDescription);
};
