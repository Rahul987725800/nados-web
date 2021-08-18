import validations from "../helpers/validations";
import { IconButton } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { ReactComponent as LockSvg } from "../assets/icons/Input/lock.svg";
import { ReactComponent as MessageSvg } from "../assets/icons/Input/message.svg";
import { ReactComponent as EyeCross } from "../assets/icons/Input/eyecross.svg";

const passwordInputProps = (props) => ({
  type: props.showPassword ? "text" : "password",
  startAdornment: (
    <InputAdornment position="start">
      <LockSvg />
    </InputAdornment>
  ),
  endAdornment: (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => {
          props.setShowPassword(!props.showPassword);
        }}
      >
        {!props.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
    </InputAdornment>
  ),
});
const signupForm = {
  formName: "signupForm",
  formHeading: "Create Your Free Account",
  initialState: {
    name: {
      name: "name",
      placeholder: "Full Name",
      value: "",
      type: "text",
      validate: function () {
        return validations.isRequired(this);
      },
    },
    email: {
      name: "email",
      placeholder: "name@email.com",
      value: "",
      type: "email",
      validate: function () {
        return validations.isRequired(this) && validations.email(this);
      },
      InputProps: (props) => ({
        startAdornment: (
          <InputAdornment position="start">
            <MessageSvg />
          </InputAdornment>
        ),
      }),
    },
    password: {
      name: "password",
      placeholder: "Password",
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
      InputProps: passwordInputProps,
    },
    confirmPassword: {
      name: "confirmPassword",
      placeholder: "Confirm Password",
      value: "",
      type: "password",
      strictlyMatchDependency: "password",
      validate: function (props) {
        return validations.mustMatch({
          value: props?.dependencyValue ?? "",
        })(this, "Passwords should match");
      },
      InputProps: passwordInputProps,
    },
  },
};
export default signupForm;
