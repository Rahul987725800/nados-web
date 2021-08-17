import {
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ProfileImage from "../assets/images/profile.jpg";
import {
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  Button,
  Box,
} from "@material-ui/core";
import { useState } from "react";
const Home = ({}) => {
  const styles = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Grid>
      <Button onClick={openModal}>show modal</Button>
      <Dialog
        open={modalOpen}
        onClose={closeModal}
        classes={{ paper: styles.paper }}
        className={styles.dialogContainer}
      >
        <DialogTitle className="dialogTitle">
          <Box className="upperBar">
            <Typography className="head">Create a post</Typography>
            <IconButton className="icon" onClick={closeModal}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent className="dialogContent">
          <Box className="profile">
            <Box className="image">
              <img src={ProfileImage} alt="profile" />
            </Box>
            <Box>
              <Typography className="name">Rahul Gupta</Typography>
            </Box>
          </Box>
          <Box className="userInput">
            <textarea
              className="inputArea"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder="What do you want to talk about?"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Box>
            <Button
              variant="contained"
              style={{
                borderRadius: 20,
                backgroundColor: "blue",
                color: "white",
              }}
            >
              Post
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
export default Home;
const useStyles = makeStyles((theme) => ({
  paper: { borderRadius: 8, width: 400 },
  dialogContainer: {
    "& .dialogTitle": {
      padding: 0,
      "& .upperBar": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        "& .head": {
          fontSize: 20,
        },
        "& .icon": {
          width: 35,
          height: 35,
          "&:hover svg": {
            fill: "black",
          },
        },
      },
    },

    "& .dialogContent": {
      padding: 0,
      ".MuiDialogContent-root:first-child": {
        paddingTop: 0,
      },

      "& .profile": {
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        "& .image": {
          width: 40,
          height: 40,
          borderRadius: "50%",
          overflow: "hidden",
          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          },
        },
        "& .name": {
          marginLeft: 10,
          fontWeight: "600",
        },
      },
      "& .userInput": {
        height: 300,
        padding: "1rem",
        "& .inputArea": {
          height: "100%",
          outline: "none",
          border: "none",
          fontFamily: "inherit",
          fontWeight: 16,
          width: "100%",
          resize: "none",
        },
      },
    },
  },
}));
