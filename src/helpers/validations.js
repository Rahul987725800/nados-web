import { nToL } from "./utils";

const validations = {
  isRequired: (input, errorMessage = "This field can't be empty") => {
    if (!input.customError) input.errorText = errorMessage;
    if (input.value) return true;
    return false;
  },
  mustMatch: ({ value }) => {
    return (input, errorMessage) => {
      if (!input.customError)
        input.errorText =
          errorMessage ||
          `${nToL(input.name)} must match with ${nToL(
            input.strictlyMatchDependency ?? ""
          )}`;
      if (input.value === value) {
        return true;
      }
      return false;
    };
  },
  minMaxLength: ({ min, max }) => {
    return (
      input,
      errorMessage = min && max
        ? `Length should be between ${min} and ${max} characters`
        : min
        ? `Length should be at least ${min} characters long`
        : `Length should be maximum ${max} characters long`
    ) => {
      if (!input.customError) input.errorText = errorMessage;
      if (
        input.value.length >= (min ?? 0) &&
        input.value.length <= (max ?? Infinity)
      )
        return true;
      return false;
    };
  },
  email: (input, errorMessage = "Please enter a valid email") => {
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!input.customError) input.errorText = errorMessage;

    return re.test(input.value.trim().toLowerCase());
  },
  atLeastOneUpperCaseCharacter: (
    input,
    errorMessage = nToL(input.name) +
      " should contain at least one upper-case character"
  ) => {
    const re = /[A-Z]/;
    if (!input.customError) input.errorText = errorMessage;
    return re.test(input.value);
  },
  atLeastOneLowerCaseCharacter: (
    input,
    errorMessage = nToL(input.name) +
      " should contain at least one lower-case character"
  ) => {
    const re = /[a-z]/;
    if (!input.customError) input.errorText = errorMessage;
    return re.test(input.value);
  },
  atLeastOneDigit: (
    input,
    errorMessage = nToL(input.name) + " should contain at least one digit"
  ) => {
    const re = /\d/;
    if (!input.customError) input.errorText = errorMessage;
    return re.test(input.value);
  },
  atLeastOneSpecialCharacter: (
    input,
    errorMessage = nToL(input.name) +
      " should contain at least one special character"
  ) => {
    const re = /[^A-Za-z0-9 ]/; // [^A-Za-z0-9 ]
    if (!input.customError) input.errorText = errorMessage;
    return re.test(input.value);
  },
};
export default validations;
