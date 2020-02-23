
const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toString().toLowerCase());
}

export const validateControl = (value, validation) => {
  if (!validation) {
    return true;
  }

  let isValid = true;

  if (validation.require) {
    isValid = value.trim() !== '' && isValid
  }

  if (validation.email) {
    isValid = validateEmail(value) && isValid
  }

  if (validation.minLengh) {
    isValid = value.length >= validation.minLength && isValid
  }

  return isValid
}