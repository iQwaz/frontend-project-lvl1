import play from '../index.js';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameOptions = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(question);
  return [question, correctAnswer];
};

export default () => play([description, gameOptions]);
