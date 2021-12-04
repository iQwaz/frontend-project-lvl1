import play from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const getOperator = () => operators[(Math.floor(Math.random() * 3))];
const getFirstNum = () => Math.floor(Math.random() * 10);
const getSecondNum = () => Math.floor(Math.random() * 10);

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
  const firstNum = getFirstNum();
  const secondNum = getSecondNum();
  const operator = getOperator();
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = String(calculateExpression(firstNum, secondNum, operator));
  return [question, correctAnswer];
};

play([description, gameOptions]);
