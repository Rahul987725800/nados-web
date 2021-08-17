import { Box, makeStyles } from "@material-ui/core";
import Navbar from "../Navbar/Navbar";
const Layout = ({ children }) => {
  const styles = useStyles();
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};
export default Layout;
const useStyles = makeStyles((theme) => ({}));
