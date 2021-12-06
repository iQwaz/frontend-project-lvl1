import { getRandomInt, play } from '../index.js';

const calculateGCD = (num1, num2) => {
  const maxNum = Math.max(num1, num2);
  const minNum = Math.min(num1, num2);
  if (minNum === 0) {
    return maxNum;
  }
  if (maxNum % minNum === 0) {
    return minNum;
  }
  return calculateGCD(minNum, maxNum % minNum);
};

const description = 'Find the greatest common divisor of given numbers.';

const gameOptions = () => {
  const firstNum = getRandomInt(100);
  const secondNum = getRandomInt(100);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = String(calculateGCD(firstNum, secondNum));
  return [question, correctAnswer];
};

export default () => play([description, gameOptions]);
