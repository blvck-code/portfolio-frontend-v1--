import React from "react";

function ScrollTop() {
  const showBtn = () => {
    console.log(window.scrollY);
  };

  window.addEventListener("scroll", showBtn);

  return (
    <div onClick={() => window.scrollTo(0, 0)} className="scroll-top">
      <i className="fa fa-chevron-up" />
    </div>
  );
}

export default ScrollTop;
