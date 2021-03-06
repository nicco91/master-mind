/* eslint-disable no-param-reassign */

export const setUsername = (state, value) => {
  state.username = value;
};

export const setPoints = (state, points) => {
  state.points = points;
};

export const initMatch = (state, match) => {
  state.match = match;
};

export const addAttempt = (state, attempt) => {
  state.attempts = [...state.attempts, attempt];
};

export const setWinner = (state) => {
  state.winner = true;
};

export const setSurrender = (state) => {
  state.surrender = true;
};

export const setLoser = (state) => {
  state.loser = true;
};

export const resetMatch = (state) => {
  state.match = null;
  state.points = 0;
  state.attempts = [];
  state.winner = false;
  state.surrender = false;
  state.loser = false;
};
