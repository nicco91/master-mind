// eslint-disable-next-line object-curly-newline, import/prefer-default-export
export const updateRanking = ({ commit, state, rootState, getters }) => {
  const attempts = rootState.game.attempts.length;
  const playerName = rootState.game.username;
  const lastRank = [...state.ranking].pop();
  if (!getters.isFull || (lastRank && attempts < lastRank.attempts)) {
    commit('updateRanking', { playerName, attempts });
  }
};
