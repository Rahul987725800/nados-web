import { useRef } from "react";
import styles from "./TextEditor.module.css";
const FileOption = ({ setFile, svg, pushRight }) => {
  const fileInputRef = useRef();
  // const styles = useStyles();

  return (
    <div className={[pushRight ? styles.pushRight : ""]}>
      <input
        type="file"
        style={{
          display: "none",
        }}
        ref={fileInputRef}
        onChange={async (e) => {
          const file = e.target.files[0];
          console.log(file);
          setFile(file);
        }}
      />
      <div
        style={{
          padding: 5,
        }}
        className={[styles.icon, styles.customIcon].join(" ")}
        onClick={() => fileInputRef.current.click()}
      >
        <img src={svg} alt="icon" />
      </div>
    </div>
  );
};
export default FileOption;
