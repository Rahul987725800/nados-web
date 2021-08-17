import { makeStyles, Box, Typography, Grid, Button } from "@material-ui/core";
import { ReactComponent as FacebookSvg } from "../assets/Login/facebook.svg";
import { ReactComponent as GoogleSvg } from "../assets/Login/google.svg";
import { ReactComponent as GreenCheckSvg } from "../assets/Login/green-check.svg";
import Layout from "../components/Global/Layout";
import ConfirmButton from "../components/Shared/ConfirmButton";
import GrayBox from "../components/Shared/GrayBox";

const Login = ({}) => {
  const styles = useStyles();
  return (
    <Layout>
      <Grid container className={styles.gridContainer} alignItems="stretch">
        <Grid item xs={8}>
          fsdfds
        </Grid>

        <Grid item xs={4} className={styles.Login}>
          <Box className="container">
            <Typography variant="h4">Login</Typography>
            <Box height={30} />
            <GrayBox>
              <FacebookSvg />
              <Box ml={2}>
                <Typography>Login with Facebook</Typography>
              </Box>
            </GrayBox>
            <Box height={10} />
            <GrayBox>
              <GoogleSvg />
              <Box ml={2}>
                <Typography>Login with Google</Typography>
              </Box>
            </GrayBox>

            <Box height={10} />
            <Typography>Use your email address</Typography>
            <Box height={10} />
            <GrayBox>
              <Box className="emailChecked">
                <Typography className="emailConfirmed">
                  saurabh@google.com
                </Typography>
                <Box flex="1" />

                <GreenCheckSvg />
              </Box>
            </GrayBox>
            <Box height={40} />
            <Box>
              <ConfirmButton>Submit</ConfirmButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Login;
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    border: "1px solid red",
    height: "100vh",
    "& .emailChecked": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      "& .emailConfirmed": {
        fontWeight: "600",
      },
    },
  },
  Login: {
    "& .container": {
      padding: "0 50px",
      height: "100vh",
      background: "rgba(232, 234, 239, 0.45)",
    },
  },
}));
