export const getRandomFromRange = (min, max) => Math.floor(Math.random() * max) + min;

export const generateRounds = (count, makeRound) => {
  const rounds = [];
  for (let i = 0; i < count; i += 1) {
    rounds.push(makeRound());
  }

  return rounds;
};
