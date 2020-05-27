import runGame from '../index.js';
import { getRandomFromRange, generateRounds } from '../utils.js';
import { DEFAULT_ROUNDS_COUNT } from '../const.js';

const operations = {
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
};
const operationSigns = Object.keys(operations);

const calc = (operationSign, leftTerm, rightTerm) => {
  const operation = operations[operationSign];
  if (!operation) {
    throw new Error('Unsupported operation');
  }

  return operation(leftTerm, rightTerm);
};

const gameDescription = 'What is the result of the expression?';
const makeRound = () => {
  const leftTerm = getRandomFromRange(1, 100);
  const rightTerm = getRandomFromRange(1, 100);

  const operationSign = operationSigns[getRandomFromRange(0, operationSigns.length - 1)];
  const question = `${leftTerm} ${operationSign} ${rightTerm}`;
  const correctAnswer = String(calc(operationSign, leftTerm, rightTerm));

  return { question, correctAnswer };
};


export default () => {
  runGame(generateRounds(DEFAULT_ROUNDS_COUNT, makeRound), gameDescription);
};
