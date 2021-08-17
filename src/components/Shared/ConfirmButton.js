import { makeStyles, Button } from "@material-ui/core";
const ConfirmButton = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <Button variant="contained" className={styles.ConfirmButton} {...props}>
      {children}
    </Button>
  );
};
export default ConfirmButton;
const useStyles = makeStyles((theme) => ({
  ConfirmButton: {
    width: "100%",
    background: "#1877F2",
    color: "white",
    height: 40,
  },
}));
