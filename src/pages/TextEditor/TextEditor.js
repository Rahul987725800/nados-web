import { EditorState } from "draft-js";
import { useState, useRef, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import Profile from "../../assets/images/profile.jpg";
import ConfirmButton from "../../components/Shared/ConfirmButton";
import RevealContent from "../../components/Shared/RevealContent";
import CloseIcon from "@material-ui/icons/Close";
import { stateToHTML } from "draft-js-export-html";
import styles from "./TextEditor.module.css";
import ControlledEditor from "./ControlledEditor";
const MyEditor = () => {
  // const styles = useStyles();
  const parentRef = useRef();
  const [editor, setEditor] = useState(EditorState.createEmpty());

  const [show, setShow] = useState(false);
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (video) {
      const clonedVideo = video;
      setVideos((prev) => [...prev, URL.createObjectURL(clonedVideo)]);
      setVideo(null);
    }
  }, [video]);
  useEffect(() => {
    if (image) {
      const clonedImage = image;
      setImages((prev) => [...prev, URL.createObjectURL(clonedImage)]);
      setImage(null);
    }
  }, [image]);

  const submit = () => {
    console.log(editor);
    const htmlState = stateToHTML(editor.getCurrentContent());
    console.log(htmlState);
    setVideos([]);
    setImages([]);
    setEditor(EditorState.createEmpty());
    setShow(false);
  };
  return (
    <div
      style={{
        width: "70%",
        margin: "auto",
        paddingTop: 30,
      }}
    >
      <div className={styles.editor} ref={parentRef}>
        <div
          className={[styles.profile, show ? styles.showBorder : ""].join(" ")}
          onClick={() => {
            setShow(!show);
          }}
        >
          <div className={styles.image}>
            <img src={Profile} alt="profile" />
          </div>
          {show ? (
            <p className={styles.name}>Saurabh Kumar</p>
          ) : (
            <p className={styles.faded}>start a post</p>
          )}
        </div>
        <RevealContent parentRef={parentRef} delay={200} show={show}>
          <div>
            <ControlledEditor
              setImage={setImage}
              setVideo={setVideo}
              editor={editor}
              setEditor={setEditor}
            />

            <div
              className={styles.previews}
              style={{
                visibility:
                  images.length || videos.length ? "visible" : "hidden",
              }}
            >
              {images.map((imgSrc, i) => (
                <div className={styles.singlePreview} key={i}>
                  <img src={imgSrc} alt="preview" />
                  <div
                    className={styles.icon}
                    onClick={() => {
                      setImages((prev) => {
                        const updated = [...prev];
                        updated.splice(i, 1);
                        return updated;
                      });
                    }}
                  >
                    <CloseIcon fontSize={"small"} />
                  </div>
                </div>
              ))}
              {videos.map((videoSrc, i) => (
                <div className={styles.singlePreview} key={i}>
                  <video preload="metadata">
                    <source src={videoSrc} />
                  </video>
                  <div
                    className={styles.icon}
                    onClick={() => {
                      setVideos((prev) => {
                        const updated = [...prev];
                        updated.splice(i, 1);
                        return updated;
                      });
                    }}
                  >
                    <CloseIcon fontSize={"small"} />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.buttonContainer}>
              <ConfirmButton onClick={submit}>Post</ConfirmButton>
            </div>
          </div>
        </RevealContent>
      </div>
    </div>
  );
};
export default MyEditor;
