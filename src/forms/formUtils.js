export const validateAllFieldsOfForm = (formProps, skipValidation) => {
  if (skipValidation) {
    return true;
  }
  let allFieldsValid = true;
  const updatedFormState = { ...formProps.formState };
  for (const name in updatedFormState) {
    const input = { ...updatedFormState[name] };
    let valid = true;
    if (input.validate) {
      if (input.strictlyMatchDependency) {
        valid = input.validate({
          dependencyValue:
            updatedFormState[input.strictlyMatchDependency].value,
        });
      } else {
        valid = input.validate();
      }
    }
    // console.log(valid);
    if (!valid) {
      input.error = input.errorText;
      allFieldsValid = false;
    } else {
      input.error = "";
    }
    // console.log(input);
    updatedFormState[name] = input;
  }
  formProps.setFormState(updatedFormState);

  return allFieldsValid;
};
export const validateSingleFieldOfForm = (
  fieldName,
  formProps,
  skipValidation
) => {
  if (skipValidation) {
    return true;
  }
  let valid = true;
  const updatedFormState = { ...formProps.formState };

  const input = { ...updatedFormState[fieldName] };
  // console.log(input);
  if (input.validate) {
    if (input.strictlyMatchDependency) {
      valid = input.validate({
        dependencyValue: updatedFormState[input.strictlyMatchDependency].value,
      });
    } else {
      valid = input.validate();
    }
  }
  if (!valid) {
    input.error = input.errorText;
  } else {
    input.error = "";
  }
  updatedFormState[fieldName] = input;

  formProps.setFormState(updatedFormState);
  return valid;
};
