import { makeStyles, Box } from "@material-ui/core";
const GrayBox = ({ children }) => {
  const styles = useStyles();
  return <Box className={styles.GrayBox}>{children}</Box>;
};
export default GrayBox;
const useStyles = makeStyles((theme) => ({
  GrayBox: {
    backgroundColor: "#E5E5E5",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    height: 60,
  },
}));
