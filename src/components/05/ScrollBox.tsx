import React from "react";
import "./ScrollBox.css";

const ScrollBox = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="outer" ref={ref}>
      <div className="inner" />
    </div>
  );
});

export default ScrollBox;
