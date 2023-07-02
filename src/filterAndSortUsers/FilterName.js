export const searchName = (searchInp, users) => {
  return users.filter((user) =>
    user.fullName.toLowerCase().includes(searchInp.toLowerCase())
  );
};
