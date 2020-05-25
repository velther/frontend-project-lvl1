import runGame from '../index.js';
import { getRandomFromRange, generateRounds } from '../utils.js';
import { DEFAULT_ROUNDS_COUNT } from '../const.js';

const getProgression = (length, step) => {
  const progression = [];
  const start = getRandomFromRange(1, 100);
  progression.push(start);

  for (let i = 1; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const gameDescription = 'What number is missing in the progression?';
const brainProgression = () => {
  const progression = getProgression(10, getRandomFromRange(1, 7));
  const hiddenItemIndex = getRandomFromRange(0, progression.length - 1);
  const correctAnswer = progression[hiddenItemIndex];
  progression[hiddenItemIndex] = '..';

  return { question: progression.join(' '), correctAnswer };
};

export default () => {
  runGame(generateRounds(DEFAULT_ROUNDS_COUNT, brainProgression), gameDescription);
};
