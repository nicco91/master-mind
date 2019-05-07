export const username = state => state.username;
export const invalidUsername = state => state.username == null || state.username === '';
export const points = state => state.points;
export const match = state => state.match;
export const attempts = state => state.attempts;
export const sortedAttempts = state => [...state.attempts].reverse();
export const winner = state => state.winner;
