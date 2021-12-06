import { getRandomInt, play } from '../index.js';

const isPrime = (num) => {
  let primeCheck = true;
  let i = 2;
  if (num <= 1) {
    return false;
  }
  while ((i * i <= num) && (primeCheck !== false)) {
    if (num % i === 0) {
      primeCheck = false;
    }
    i += 1;
  }
  return primeCheck;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameOptions = () => {
  const question = getRandomInt(25);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => play([description, gameOptions]);
