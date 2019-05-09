export const username = state => state.username;
export const invalidUsername = state => state.username == null || state.username === '';
export const points = state => state.points;
export const match = state => state.match;
export const attempts = state => state.attempts;
export const sortedAttempts = state => [...state.attempts].reverse();
export const winner = state => state.winner;
export const surrender = state => state.surrender;
export const loser = state => state.loser;
export const remainingAttempts = (state, getters, rootState) => (
  rootState.config.attempts - state.attempts.length
);
