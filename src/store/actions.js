export const setUsername = ({ commit }, value) => commit('setUsername', value);

export const setPoints = ({ commit }, value) => {
  const parsed = parseInt(value, 10);
  const points = parsed >= 0 ? parsed : 0;
  commit('setPoints', points);
};
