  export const searchEmail = (searchInp,users) => {
    return users.filter((user) =>
      user.email.toLowerCase().includes(searchInp.toLowerCase())
    );
  };

