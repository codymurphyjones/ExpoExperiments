

export const emailValidate = (email) => {
    const validate = /.*@?.*\.[0-z]*/

    return validate.test(String(email).toLowerCase())
}

export const passwordValidate = (password, confirm) => {
  const validate = new RegExp(password);

  return (
    (password.length > 6) &&
    validate.test(String(confirm).toLowerCase())
  );
};
