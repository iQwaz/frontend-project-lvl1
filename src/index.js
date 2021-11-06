import readlineSync from 'readline-sync';
import greeting from './cli.js';

const play = (gameParameters) => {
  const userName = greeting(); // Greeting and assign username
  const [description, gameOptions] = gameParameters;
  let gameRound = 0;

  console.log(description); // Game description

  while (gameRound < 3) {
    const [gameQuestion, correctAnswer] = gameOptions();
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      gameRound += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default play;
