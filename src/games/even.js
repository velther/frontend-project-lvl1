import createGame from '../index.js';
import { getRandomFromRange } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEven = () => {
  const question = getRandomFromRange(1, 100);
  const correctAnswer = question % 2 ? 'no' : 'yes';

  return { question, correctAnswer };
};

export default createGame(brainEven, gameDescription);
