import React, { useRef, useState } from "react";
import styles from "./Chat.module.css";
import ProfileImage from "../../assets/images/profile.jpg";
import ChatItem from "./ChatItem";
import RevealContent from "../../components/Shared/RevealContent";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton } from "@material-ui/core";
import ImageContainer from "./ImageContainer";
function Chat() {
  const parentRef = useRef();
  const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.box} ref={parentRef}>
        <div
          className={styles.profile}
          onClick={() => {
            setShow(!show);
          }}
        >
          <ImageContainer src={ProfileImage} />

          <p className={styles.name}>Let's Chat</p>
          <div className={styles.icon}>
            {show ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </div>
        </div>
        <RevealContent parentRef={parentRef} delay={200} show={show}>
          <div className={styles.chatItems}>
            <ChatItem
              profileImage={ProfileImage}
              name="Rahul Gupta"
              lastMessage="Hii, how are you?"
              numNewMessages={1}
              online={true}
            />
            <ChatItem
              profileImage={ProfileImage}
              name="Rahul Gupta"
              lastMessage="Hii, how are you?"
              online={true}
            />
            <ChatItem
              profileImage={ProfileImage}
              name="Rahul Gupta"
              lastMessage="Hii, how are you?"
              online={false}
            />
            <ChatItem
              profileImage={ProfileImage}
              name="Rahul Gupta"
              lastMessage="Hii, how are you?"
              numNewMessages={2}
              online={true}
            />
            <ChatItem
              profileImage={ProfileImage}
              name="Rahul Gupta"
              lastMessage="Hii, how are you?"
              numNewMessages={2}
              online={true}
            />
          </div>
        </RevealContent>
      </div>
    </div>
  );
}

export default Chat;
