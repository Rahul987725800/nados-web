import { makeStyles, Box, Typography } from "@material-ui/core";
const Navbar = ({}) => {
  const styles = useStyles();
  return (
    <Box display="flex">
      <Box display="flex">
        <Typography>Community</Typography>
        <Typography>Career</Typography>
        <Typography>Content</Typography>
        <Typography>Compete</Typography>
      </Box>
    </Box>
  );
};
export default Navbar;
const useStyles = makeStyles((theme) => ({}));
