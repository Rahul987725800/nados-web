import React from "react";
import styles from "./ImageContainer.module.css";
function ImageContainer({ src, children }) {
  return (
    <div className={styles.image}>
      <img src={src} alt="user" />
      {children}
    </div>
  );
}

export default ImageContainer;
