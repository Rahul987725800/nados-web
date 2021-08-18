import { Editor } from "react-draft-wysiwyg";
import SmilySvg from "../../assets/icons/Editor/smily.svg";
import BoldSvg from "../../assets/icons/Editor/bold.svg";
import ItalicSvg from "../../assets/icons/Editor/italic.svg";
import PhotoSvg from "../../assets/icons/Editor/photo.svg";
import UnderlineSvg from "../../assets/icons/Editor/underline.svg";
import VideoSvg from "../../assets/icons/Editor/video.svg";
import styles from "./TextEditor.module.css";
import FileOption from "./FileOption";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const ControlledEditor = ({ setImage, setVideo, setEditor, editor }) => {
  // const styles = useStyles();

  const onEditorStateChange = (editorState) => {
    setEditor(editorState);
  };

  return (
    <Editor
      editorState={editor}
      placeholder="What do you want to talk about?"
      wrapperClassName="demo-wrapper"
      editorClassName={styles.editorInput}
      toolbarClassName={styles.toolbar}
      onEditorStateChange={onEditorStateChange}
      mention={{
        separator: " ",
        trigger: "@",
        suggestions: [
          { text: "APPLE", value: "apple", url: "apple" },
          { text: "BANANA", value: "banana", url: "banana" },
          { text: "CHERRY", value: "cherry", url: "cherry" },
          { text: "DURIAN", value: "durian", url: "durian" },
          { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
          { text: "FIG", value: "fig", url: "fig" },
          { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
          { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
        ],
      }}
      hashtag={{
        separator: " ",
        trigger: "#",
      }}
      toolbar={{
        options: ["inline", "emoji"],
        inline: {
          inDropdown: false,
          className: undefined,
          component: undefined,
          dropdownClassName: undefined,
          options: ["bold", "italic", "underline"],
          bold: {
            icon: BoldSvg,
            className: styles.icon,
          },
          italic: {
            icon: ItalicSvg,
            className: styles.icon,
          },
          underline: {
            icon: UnderlineSvg,
            className: styles.icon,
          },
        },

        emoji: {
          icon: SmilySvg,
          className: styles.icon,
          component: undefined,
          popupClassName: undefined,
          emojis: [
            "😀",
            "😁",
            "😂",
            "😃",
            "😉",
            "😋",
            "😎",
            "😍",
            "😗",
            "🤗",
            "🤔",
            "😣",
            "😫",
            "😴",
            "😌",
            "🤓",
            "😛",
            "😜",
            "😠",
            "😇",
            "😷",
            "😈",
            "👻",
            "😺",
            "😸",
            "😹",
            "😻",
            "😼",
            "😽",
            "🙀",
            "🙈",
            "🙉",
            "🙊",
            "👼",
            "👮",
            "🕵",
            "💂",
            "👳",
            "🎅",
            "👸",
            "👰",
            "👲",
            "🙍",
            "🙇",
            "🚶",
            "🏃",
            "💃",
            "⛷",
            "🏂",
            "🏌",
            "🏄",
            "🚣",
            "🏊",
            "⛹",
            "🏋",
            "🚴",
            "👫",
            "💪",
            "👈",
            "👉",
            "👉",
            "👆",
            "🖕",
            "👇",
            "🖖",
            "🤘",
            "🖐",
            "👌",
            "👍",
            "👎",
            "✊",
            "👊",
            "👏",
            "🙌",
            "🙏",
            "🐵",
            "🐶",
            "🐇",
            "🐥",
            "🐸",
            "🐌",
            "🐛",
            "🐜",
            "🐝",
            "🍉",
            "🍄",
            "🍔",
            "🍤",
            "🍨",
            "🍪",
            "🎂",
            "🍰",
            "🍾",
            "🍷",
            "🍸",
            "🍺",
            "🌍",
            "🚑",
            "⏰",
            "🌙",
            "🌝",
            "🌞",
            "⭐",
            "🌟",
            "🌠",
            "🌨",
            "🌩",
            "⛄",
            "🔥",
            "🎄",
            "🎈",
            "🎉",
            "🎊",
            "🎁",
            "🎗",
            "🏀",
            "🏈",
            "🎲",
            "🔇",
            "🔈",
            "📣",
            "🔔",
            "🎵",
            "🎷",
            "💰",
            "🖊",
            "📅",
            "✅",
            "❎",
            "💯",
          ],
        },
      }}
      toolbarCustomButtons={[
        <FileOption setFile={setImage} svg={PhotoSvg} pushRight />,
        <FileOption setFile={setVideo} svg={VideoSvg} />,
      ]}
    />
  );
};
export default ControlledEditor;
