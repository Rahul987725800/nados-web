import { makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import classNames from "classnames";

// console.log(CountryRegionData);

function InputBox({ input, onChange, onBlur, resetValue }) {
  const styles = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  let inputProps = {
    disableUnderline: true, // <== added this
  };
  if (input.InputProps) {
    inputProps = {
      ...inputProps,
      ...input.InputProps({ showPassword, setShowPassword }),
    };
  }
  return (
    <TextField
      classes={{ root: styles.inputContainer }}
      variant="filled"
      // label={input.label}
      type={input.type}
      name={input.name}
      value={input.value}
      onChange={onChange}
      placeholder={input.placeholder}
      onBlur={onBlur}
      autoComplete="on"
      helperText={input.error}
      error={input.error}
      InputProps={inputProps}
    ></TextField>
  );
}

export default InputBox;
const useStyles = makeStyles((theme) => {
  // console.log(theme.breakpoints.values);
  return {
    inputContainer: {
      "& .MuiInputAdornment-positionStart": {
        marginBottom: 10,
      },
      "& .MuiInputBase-root": {
        borderRadius: "4px",
      },
      // "& svg": {
      //   margin: "auto",
      // },
      "& input": {
        marginBottom: 10,
      },

      //   "&::-webkit-input-placeholder ": {
      //     color: "black",
      //     paddingBottom: 30,
      //   },
      // },
    },
  };
});
