import { getRandomInt, play } from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (initNum, step) => {
  const members = [initNum];
  for (let i = 1; i < 10; i += 1) {
    members.push(members[i - 1] + step);
  }
  return members;
};

const getQuestionString = (arr, item) => {
  const hiddenIndex = arr.indexOf(item);
  let str = '';
  for (let i = 0; i < arr.length; i += 1) {
    str += (i === hiddenIndex) ? '.. ' : `${arr[i]} `;
  }
  return str.trim();
};

const gameOptions = () => {
  const firstMember = getRandomInt(20);
  const progressionStep = getRandomInt(50);
  const progression = generateProgression(firstMember, progressionStep);
  const correctAnswer = progression[getRandomInt(progression.length)];
  const question = getQuestionString(progression, correctAnswer);
  return [question, String(correctAnswer)];
};

export default () => play([description, gameOptions]);
