import { makeStyles, Theme } from "@material-ui/core";
import classNames from "classnames";
// console.log(CountryRegionData);

function InputBox({ input, onChange, onBlur, resetValue }) {
  const styles = useStyles();

  return (
    <div
      className={classNames(styles.inputBox, {
        [styles.errorBorderOnInput]: !!input.error,
      })}
    >
      <label className="label">
        <p className="text">{input.label}</p>
      </label>

      <div className={styles.inputContainer + " MyInputContainer"}>
        <input
          className={classNames(styles.input)}
          {...input.inputProps}
          type={input.type}
          name={input.name}
          value={input.value}
          onChange={onChange}
          placeholder={input.placeholder}
          onBlur={onBlur}
          autoComplete="on"
        ></input>
        <div className={styles.inputError}>{input.error}</div>
      </div>
    </div>
  );
}

export default InputBox;
const useStyles = makeStyles((theme) => {
  // console.log(theme.breakpoints.values);
  return {
    errorBorderOnInput: {
      "& input, select": {
        borderColor: "#FFC107 !important",
      },
    },
    inputBox: {
      "& .label": {
        display: "flex",
        marginBottom: ".5rem",
        gap: 10,
        "& .text": {
          fontWeight: "bold",
          fontSize: "1.1rem",
        },
      },
    },

    input: {
      width: "100%",
      padding: 12,
      borderRadius: "4px",
      border: "1px solid #DDDDDD",
      backgroundColor: "white",
      outline: "none",
    },
    inputError: {
      color: "red",
    },
  };
});
