import React from "react";

function ScrollTop() {
  const scrollToTop = () => {
    let { scrollTop } = document.documentElement;
    scrollTop = 0;
  };

  return (
    <a href="#header">
      <div className="scroll-top">
        <i className="fa fa-chevron-up" />
      </div>
    </a>
  );
}

export default ScrollTop;
