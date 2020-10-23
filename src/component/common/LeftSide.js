import React from "react";

function LeftSide() {
  return (
    <aside className="left">
      <div className="icons">
        <div>
          <a
            href="https://github.com/blvck-code"
            target="_blank"
            className="fa fa-github"></a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/maurice-brian-oluoch-ba1269121/"
            target="_blank"
            className="fa fa-linkedin"></a>
        </div>
        <div>
          <a href="tel:+254795772333" className="fa fa-phone"></a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/oluoch_jnr/"
            target="_blank"
            className="fa fa-instagram"></a>
        </div>
        <div>
          <a
            href="https://twitter.com/blvck_code"
            target="_blank"
            className="fa fa-twitter"></a>
        </div>
      </div>
      <div className="line"></div>
    </aside>
  );
}

export default LeftSide;
