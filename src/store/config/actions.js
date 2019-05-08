export const setSecretLength = ({ commit }, value) => {
  if (value >= 3 && value <= 5) {
    commit('setSecretLength', value);
  }
};

export const setSymbols = ({ commit }, value) => {
  if (value >= 5 && value <= 10) {
    commit('setSymbols', value);
  }
};

export const setAttemptsLimit = ({ commit }, value) => {
  commit('setAttemptsLimit', value);
};

export const setAttempts = ({ commit }, value) => {
  if (value > 0) {
    commit('setAttempts', value);
  }
};
