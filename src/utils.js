export const getRandomFromRange = (min, max) => Math.floor(Math.random() * max) + min;

export const generateRounds = (count, game) => {
  const rounds = [];
  for (let i = 0; i < count; i += 1) {
    rounds.push(game());
  }

  return rounds;
};
