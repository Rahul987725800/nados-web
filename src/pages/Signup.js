import {
  makeStyles,
  Box,
  Typography,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import Layout from "../components/Global/Layout";
import ConfirmButton from "../components/Shared/ConfirmButton";
import Form from "../components/Shared/Form";
import { validateAllFieldsOfForm } from "../forms/formUtils";
import signupForm from "../forms/signupForm";
import { useForm } from "../hooks/useForm";
const Signup = ({}) => {
  const styles = useStyles();
  const signupFormProps = useForm(signupForm.initialState);
  const signup = () => {
    console.log(signupFormProps.formState);
    if (validateAllFieldsOfForm(signupFormProps)) {
      console.log("form submitted successfully");
    }
  };
  return (
    <Layout>
      <Grid container className={styles.gridContainer} alignItems="stretch">
        <Grid item xs={8}>
          fsdfds
        </Grid>

        <Grid item xs={4} className={styles.Signup}>
          <Box className="container">
            <Typography variant="h4">Sign Up</Typography>
            <Box height={30} />

            <Form
              form={signupForm}
              formProps={signupFormProps}
              validateOnBlur={true}
              autoComplete="off"
              onSubmit={signup}
            >
              <Box height={40} />
              <Box>
                <ConfirmButton type="submit">Submit</ConfirmButton>
              </Box>
            </Form>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Signup;
const useStyles = makeStyles((theme) => ({
  Signup: {
    "& .container": {
      padding: "0 50px",
      minHeight: "100vh",
      background: "rgba(232, 234, 239, 0.45)",
    },
  },
}));
