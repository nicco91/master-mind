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

function calcRightPlace(attempt, match, checkMatch, checkAttempt) {
  return attempt.reduce((acc, digit, index) => {
    let increment = 0;
    if (match[index] === digit) {
      increment = 1;
      checkMatch[index] = false;
      checkAttempt[index] = false;
    }
    return acc + increment;
  }, 0);
}

function calcWrongPlace(attempt, match, secretLength, checkMatch, checkAttempt) {
  return attempt.reduce((acc, attemptDigit, i) => {
    let j = 0;
    let increment = 0;
    while (j < secretLength && checkAttempt[i]) {
      if (checkMatch[j] && match[j] === attemptDigit) {
        increment += 1;
        checkMatch[j] = false;
        checkAttempt[i] = false;
      }
      j += 1;
    }
    return acc + increment;
  }, 0);
}

function initCheckArray(secretLength) {
  const checkArray = [];
  for (let i = 0; i < secretLength; i += 1) {
    checkArray.push(true);
  }
  return checkArray;
}

export const tryAttempt = (context, attempt) => {
  const { secretLength, attemptsLimit } = context.rootState.config;
  const { match } = context.state;
  const checkMatch = initCheckArray(secretLength);
  const checkAttempt = initCheckArray(secretLength);
  const rightPlace = calcRightPlace(attempt, match, checkMatch, checkAttempt);
  const wrongPlace = calcWrongPlace(attempt, match, secretLength, checkMatch, checkAttempt);

  context.commit('addAttempt', { attempt, rightPlace, wrongPlace });

  if (rightPlace === secretLength) {
    context.commit('setWinner');
    context.dispatch('ranking/updateRanking', null, { root: true });
  }

  const hasAttempts = context.getters.remainingAttempts === 0;
  if (attemptsLimit && hasAttempts && !context.getters.winner) {
    context.commit('setLoser');
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
