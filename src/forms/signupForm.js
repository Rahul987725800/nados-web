import validations from "../helpers/validations";

const signupForm = {
  formName: "signupForm",
  formHeading: "Create Your Free Account",
  initialState: {
    name: {
      name: "name",
      label: `Name`,
      placeholder: "name*",
      value: "",
      type: "text",
      validate: function () {
        return validations.isRequired(this);
      },
    },
    email: {
      name: "email",
      label: `Email`,
      placeholder: "email*",
      value: "",
      type: "email",
      validate: function () {
        return validations.isRequired(this) && validations.email(this);
      },
    },
    password: {
      name: "password",
      label: `Password`,
      placeholder: "password*",
      value: "",
      type: "password",
      constraints: [
        "At least one upper case English letter",
        "At least one lower case English letter",
        "At least one digit",
        "At least one special character",
        "Minimum eight in length",
      ],
      showPasswordStrengthBar: true,

      validate: function () {
        return (
          validations.isRequired(this) &&
          validations.atLeastOneUpperCaseCharacter(this) &&
          validations.atLeastOneLowerCaseCharacter(this) &&
          validations.atLeastOneDigit(this) &&
          validations.atLeastOneSpecialCharacter(this) &&
          validations.minMaxLength({ min: 8 })(this)
        );
      },
      errorText:
        "Password must have at least 8 characters and cannot contain common words or patterns. Try adding numbers, symbols, or characters to make your password longer and more unique.",
      customError: true,
    },
    confirmPassword: {
      name: "confirmPassword",
      label: `Confirm Password *`,
      placeholder: "Confirm Password *",
      value: "",
      type: "password",
      strictlyMatchDependency: "password",
      validate: function (props) {
        return validations.mustMatch({
          value: props?.dependencyValue ?? "",
        })(this, "Passwords should match");
      },
    },
  },
};
export default signupForm;
