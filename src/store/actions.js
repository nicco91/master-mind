export const setUsername = ({ commit }, value) => commit('setUsername', value);

export const setPoints = ({ commit }, value) => {
  const parsed = parseInt(value, 10);
  const points = parsed >= 0 ? parsed : 0;
  commit('setPoints', points);
};

export const generateMatch = ({ commit }) => {
  const match = [0, 0, 0].map(() => parseInt(Math.random() * 9, 10));
  commit('initMatch', match);
};

export const tryAttempt = ({ commit, state }, attempt) => {
  const checkMatch = [true, true, true];
  const checkAttempt = [true, true, true];
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
    while (j < 3 && checkAttempt[i]) {
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

  if (rightPlace === 3) {
    commit('setWinner');
  }
};

export const resetMatch = ({ commit }) => {
  commit('resetMatch');
};
