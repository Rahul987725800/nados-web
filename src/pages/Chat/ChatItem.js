import React from "react";
import styles from "./ChatItem.module.css";
import ImageContainer from "./ImageContainer";
function ChatItem({ profileImage, name, numNewMessages, lastMessage, online }) {
  return (
    <div className={styles.chatItem}>
      <ImageContainer src={profileImage}>
        <div
          className={[styles.dot, online ? styles.online : ""].join(" ")}
        ></div>
      </ImageContainer>
      <div className={styles.mid}>
        <p className={styles.name}>{name}</p>
        <p className={styles.lastMessage}>{lastMessage}</p>
      </div>
      {numNewMessages && (
        <div className={styles.numNewMessages}>{numNewMessages}</div>
      )}
    </div>
  );
}

export default ChatItem;
