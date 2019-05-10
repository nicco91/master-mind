// eslint-disable-next-line import/prefer-default-export
export const updateRanking = (state, newRank) => {
  const newRanking = [...state.ranking, newRank];
  newRanking.sort((a, b) => (a.attempts < b.attempts ? -1 : 1));
  state.ranking = newRanking;
};
