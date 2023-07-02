export const sort_a_to_z = (users) => {
  return [...users].sort((a, b) => a.firstName.localeCompare(b.firstName));
};
