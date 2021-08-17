import InputBox from "./InputBox";
import { makeStyles } from "@material-ui/core";

import { useEffect } from "react";
import { validateSingleFieldOfForm } from "../../forms/formUtils";

const Form = ({
  form,
  formProps,
  validateOnBlur = true,
  autoComplete,
  methodOnBlur,
  padForm = true,
  defaultValues,
  onSubmit,
  children,
}) => {
  const styles = useStyles();
  const { formState, setFormState, handleInputChange, resetForm } = formProps;
  useEffect(() => {
    // console.log(defaultValues);
    if (defaultValues) {
      const updatedFormState = { ...formState };
      for (let fieldName in defaultValues) {
        const input = { ...updatedFormState[fieldName] };
        updatedFormState[fieldName] = {
          ...input,
          value: defaultValues[fieldName],
          error: "", // no error
        };
      }
      setFormState(updatedFormState);
    }
  }, []);

  return (
    <div>
      <form
        autoComplete={autoComplete}
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.();
        }}
      >
        {Object.keys(formState).map((inputName, i) => {
          // console.log(inputName);
          const input = formState[inputName];
          return (
            <InputBox
              key={i}
              input={input}
              onChange={handleInputChange}
              onBlur={(e) => {
                if (validateOnBlur) {
                  validateSingleFieldOfForm(inputName, formProps);
                }
                methodOnBlur?.();
              }}
              resetValue={() => {
                // console.log("resetting func called");
                setFormState((prev) => {
                  return {
                    ...prev,
                    [inputName]: { ...prev[inputName], value: "" },
                  };
                });
              }}
            />
          );
        })}
        {children}
      </form>
    </div>
  );
};
export default Form;
const useStyles = makeStyles((theme) => ({
  form: {
    // border: "1px solid pink",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
}));
