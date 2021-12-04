import play from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const getOperator = () => operators[(Math.floor(Math.random() * 3))];
const getRandomInt = () => Math.floor(Math.random() * 10);

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
  const firstNum = getRandomInt();
  const secondNum = getRandomInt();
  const operator = getOperator();
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = String(calculateExpression(firstNum, secondNum, operator));
  return [question, correctAnswer];
};

export default () => play([description, gameOptions]);
