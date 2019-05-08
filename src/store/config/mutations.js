/* eslint-disable no-param-reassign */

export const setSecretLength = (state, value) => {
  state.setSecretLength = value;
};

export const setSymbols = (state, value) => {
  state.symbols = value;
};

export const setAttemptsLimit = (state, value) => {
  state.attemptsLimit = value;
};

export const setAttempts = (state, value) => {
  state.attempts = value;
};
