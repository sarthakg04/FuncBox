export const hash = (value) => {
  return btoa(value);
};
export const unhash = (value) => {
  return atob(value);
};
