import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
};

export const askQuestion = (text) => readlineSync.question(`${text} `).trim();

export const askName = () => {
  const name = askQuestion('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
};
