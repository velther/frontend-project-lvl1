import createGame from '../index.js';
import { getRandomFromRange } from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const operations = {
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
};
const operationSigns = Object.keys(operations);

const brainCalc = () => {
  const leftTerm = getRandomFromRange(1, 100);
  const rightTerm = getRandomFromRange(1, 100);

  const operationSign = operationSigns[getRandomFromRange(0, operationSigns.length - 1)];
  const question = `${leftTerm} ${operationSign} ${rightTerm}`;
  const correctAnswer = operations[operationSign](leftTerm, rightTerm);

  return { question, correctAnswer };
};

export default createGame(brainCalc, gameDescription);
