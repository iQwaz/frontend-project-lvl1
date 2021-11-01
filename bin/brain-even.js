import readlineSync from 'readline-sync';

const isEven = (num) => (num % 2 === 0);

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let rigthCounter = 0;
let wrongCounter = 0;

while ((rigthCounter < 3) && (wrongCounter < 3)) {
  const question = Math.floor(Math.random() * 100);
  const answer = readlineSync.question(`Question: ${question} `);
  if (answer === 'yes') {
    if (isEven(question)) {
      console.log('Correct!');
      rigthCounter += 1;
    } else {
      console.log('"yes" is wrong answer ;(. Correct answer was "no"');
      wrongCounter += 1;
    }
  } else if (answer === 'no') {
    if (isEven(question)) {
      console.log('"no" is wrong answer ;(. Correct answer was "yes"');
      wrongCounter += 1;
    } else {
      console.log('Correct!');
      rigthCounter += 1;
    }
  } else {
    console.log('Incorrect!');
    wrongCounter += 1;
  }
  if (rigthCounter === 3) {
    console.log(`Congratulation, ${name}!`);
  } else if (wrongCounter === 3) {
    console.log(`You lose, ${name}!`);
  }
}
