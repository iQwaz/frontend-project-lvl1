import { getRandomInt, play } from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const getOperator = () => operators[getRandomInt(operators.length)];

const calculateExpression = (a, b, op) => {
  switch (op) {
    case '+':
      return (a + b);
    case '-':
      return (a - b);
    case '*':
      return (a * b);
    default:
      return NaN;
  }
};

const gameOptions = () => {
  const firstNum = getRandomInt(10);
  const secondNum = getRandomInt(10);
  const operator = getOperator();
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = String(calculateExpression(firstNum, secondNum, operator));
  return [question, correctAnswer];
};

export default () => play([description, gameOptions]);
