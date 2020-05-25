import runGame from '../index.js';
import { getRandomFromRange, generateRounds } from '../utils.js';
import { DEFAULT_ROUNDS_COUNT } from '../const.js';

const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

const gameDescription = 'Find the greatest common divisor of given numbers.';
const brainGcd = () => {
  const first = getRandomFromRange(1, 50);
  const second = getRandomFromRange(1, 50);
  const question = `${first} ${second}`;
  const correctAnswer = gcd(first, second);

  return { question, correctAnswer };
};

export default () => {
  runGame(generateRounds(DEFAULT_ROUNDS_COUNT, brainGcd), gameDescription);
};
