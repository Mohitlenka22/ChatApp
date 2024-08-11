export const validateUserName = username => {
  if (!username) return 'UserName cannot be Null';

  let validUserName = /^[a-zA-Z0-9_]+$/.test(username);

  if (!validUserName) return 'UserName Should not';

  return null;
};

export const validatePassword = password => {
  if (!password) return 'password cannot be null';

  let validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validPassword)
    return 'password must have with at least one lowercase letter, uppercase letter, number, special character  and at least 8 characters';

  return null;
};
