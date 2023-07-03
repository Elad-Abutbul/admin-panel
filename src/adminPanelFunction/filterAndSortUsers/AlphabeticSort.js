export const AlphabeticSort= (users) => {
  return [...users].sort((a, b) => a.firstName.localeCompare(b.firstName));
};
