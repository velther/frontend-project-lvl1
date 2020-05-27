import runGame from '../index.js';
import { getRandomFromRange, generateRounds } from '../utils.js';
import { DEFAULT_ROUNDS_COUNT } from '../const.js';

const PROGRESSION_SIZE = 10;

const getProgression = (start, length, step) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }

  return progression;
};

const gameDescription = 'What number is missing in the progression?';
const makeRound = () => {
  const progressionStart = getRandomFromRange(1, 100);
  const progressionStep = getRandomFromRange(1, 7);
  const progression = getProgression(
    progressionStart,
    PROGRESSION_SIZE,
    progressionStep,
  );
  const hiddenItemIndex = getRandomFromRange(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenItemIndex]);
  progression[hiddenItemIndex] = '..';

  return { question: progression.join(' '), correctAnswer };
};

export default () => {
  runGame(generateRounds(DEFAULT_ROUNDS_COUNT, makeRound), gameDescription);
};
