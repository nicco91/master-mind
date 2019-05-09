export const setSecretLength = ({ commit, state }, value) => {
  if (value >= state.minSecretLength && value <= state.maxSecretLength) {
    commit('setSecretLength', value);
  }
};

export const setSymbols = ({ commit, state }, value) => {
  if (value >= state.minSymbols && value <= state.maxSymbols) {
    commit('setSymbols', value);
  }
};

export const setAttemptsLimit = ({ commit }, value) => {
  commit('setAttemptsLimit', value);
};

export const setAttempts = ({ commit, state }, value) => {
  if (value >= state.minAttempts) {
    commit('setAttempts', value);
  }
};

export const setConfig = (store, values) => {
  const {
    secretLength,
    symbols,
    attemptsLimit,
    attempts,
  } = values;
  setSecretLength(store, secretLength);
  setSymbols(store, symbols);
  setAttemptsLimit(store, attemptsLimit);
  setAttempts(store, attempts);
};
