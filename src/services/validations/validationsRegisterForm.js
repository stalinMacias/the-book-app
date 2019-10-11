function validations(name, value) {
  if (name === "email") return validateEmail(value);
  if (name === "password") return validatePassword(value, "Password");
  if (name === "confirmPassword")
    return validatePassword(value, "Confirm Password");
}

function validateEmail(email) {
  if (email === "") return "Email can not be empty";
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) return "Email is invalid";
  return "";
}

function validatePassword(password, auxLabel) {
  if (password === "") return `${auxLabel} can not be empty`;
  if (password.length < 6) return `${auxLabel} must be at least 6 characters`;
}

function comparePasswords(password, confirmPassword) {
  if (password !== confirmPassword)
    return "Password and Confirm Password must be equals";
  return "";
}

export default {
  validations,
  comparePasswords
};
