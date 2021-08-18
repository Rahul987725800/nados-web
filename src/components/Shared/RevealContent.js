import { useEffect, useRef } from "react";

const RevealContent = ({ show, children, delay = 200, parentRef }) => {
  const childRef = useRef(null);
  useEffect(() => {
    if (parentRef.current) {
      parentRef.current.style.overflow = "hidden";
      parentRef.current.style.transition = `all ${delay}ms ease`;
    }
  }, []);
  useEffect(() => {
    if (parentRef.current && childRef.current) {
      const parentHeight = parentRef.current.offsetHeight;
      const childHeight = childRef.current.offsetHeight;
      if (show) {
        parentRef.current.style.maxHeight = parentHeight + childHeight + "px";
      } else {
        // parentRef.current.style.transition = `all ${delay}ms ease`;
        // we can set different cubic bizare for revealing and hiding
        parentRef.current.style.maxHeight = parentHeight - childHeight + "px";
      }
    }
  }, [show]);
  return <div ref={childRef}>{children}</div>;
};
export default RevealContent;
