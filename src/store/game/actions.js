export const setUsername = ({ commit }, value) => commit('setUsername', value);

export const setPoints = ({ commit }, value) => {
  const parsed = parseInt(value, 10);
  const points = parsed >= 0 ? parsed : 0;
  commit('setPoints', points);
};

export const generateMatch = ({ commit, rootState }) => {
  const match = [];
  const symbols = rootState.config.symbols - 1;
  for (let i = 0; i < rootState.config.secretLength; i += 1) {
    match.push(parseInt(Math.random() * symbols, 10));
  }
  commit('initMatch', match);
};

// eslint-disable-next-line object-curly-newline
export const tryAttempt = ({ commit, state, getters, rootState }, attempt) => {
  const { secretLength } = rootState.config;
  const checkMatch = [];
  const checkAttempt = [];
  for (let i = 0; i < secretLength; i += 1) {
    checkAttempt.push(true);
    checkMatch.push(true);
  }
  // count right numbers in right place
  const rightPlace = attempt.reduce((acc, digit, index) => {
    let increment = 0;
    if (state.match[index] === digit) {
      increment = 1;
      checkMatch[index] = false;
      checkAttempt[index] = false;
    }
    return acc + increment;
  }, 0);

  // count right numbers in wrong place
  const wrongPlace = attempt.reduce((acc, attemptDigit, i) => {
    let j = 0;
    let increment = 0;
    while (j < secretLength && checkAttempt[i]) {
      if (checkMatch[j] && state.match[j] === attemptDigit) {
        increment += 1;
        checkMatch[j] = false;
        checkAttempt[i] = false;
      }
      j += 1;
    }
    return acc + increment;
  }, 0);

  commit('addAttempt', { attempt, rightPlace, wrongPlace });

  if (rightPlace === secretLength) {
    commit('setWinner');
  }

  const enabledAttempts = rootState.config.attemptsLimit;
  if (enabledAttempts && getters.remainingAttempts === 0 && !getters.winner) {
    commit('setLoser');
  }
};

export const surrend = ({ commit }) => {
  commit('setSurrender');
};

export const lose = ({ commit }) => {
  commit('setLoser');
};

export const resetMatch = ({ commit }) => {
  commit('resetMatch');
};
