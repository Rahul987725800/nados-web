import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { useEffect } from "react";
import { ReactComponent as ThunderSvg } from "../assets/icons/Practice/thunder.svg";
const Practice = ({}) => {
  const styles = useStyles();
  const [buttonActive, setButtonActive] = useState(false);
  useEffect(() => {
    console.log(buttonActive);
  }, [buttonActive]);
  return (
    <div className={styles.container}>
      <h1>Practice</h1>
      <div
        className={classNames(styles.energy, { active: buttonActive })}
        onMouseDown={() => {
          setButtonActive(true);
        }}
        onMouseUp={() => {
          setButtonActive(false);
        }}
      >
        <div className="container">
          <ThunderSvg />
          <p className="text">Energy</p>
        </div>
      </div>
    </div>
  );
};
export default Practice;
const useStyles = makeStyles((theme) => ({
  container: {
    background: "#d9d9d9",
    width: "100vw",
    height: "100vh",
    padding: 20,
  },
  energy: {
    background: "#D7D7D7",
    boxShadow:
      "-20px -20px 40px rgba(152, 152, 152, 0.08), 20px 20px 40px #C6C3C3",
    borderRadius: "53px",
    width: "207px",
    height: "222px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",

    "&.active": {
      background: "#D7D7D7",
      boxShadow:
        "inset -20px -20px 40px rgba(250, 247, 247, 0.38), inset 20px 20px 40px #C8C4C4",
      "& .text": {
        color: "#3DE09B",
      },
      "& svg": {
        fill: "#3DE09B",
      },
    },
    "& .container": {
      textAlign: "center",
      "& svg": {
        fill: "#C9C2C2",
      },
      "& .text": {
        fontSize: 20,
        fontWeight: "bold",
        color: "#C9C2C2",
      },
    },
  },
}));
