import runGame from '../index.js';
import { getRandomFromRange, generateRounds } from '../utils.js';
import { DEFAULT_ROUNDS_COUNT } from '../const.js';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEven = () => {
  const question = getRandomFromRange(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  runGame(generateRounds(DEFAULT_ROUNDS_COUNT, brainEven), gameDescription);
};
