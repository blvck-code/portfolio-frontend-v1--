import React from "react";

function LeftSide() {
  return (
    <aside className="left">
      <div className="icons">
        <div>
          <a
            href="https://github.com/blvck-code"
            target="_blank"
            className="fa fa-github"
          ></a>
          <span>github/blvck-code</span>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/maurice-brian-oluoch-ba1269121/"
            target="_blank"
            className="fa fa-linkedin"
          ></a>
          <span>linkedin/maurice-brian-oluoch</span>
        </div>
        <div>
          <a href="tel:+254795772333" className="fa fa-phone"></a>
          <span>+254795772333</span>
        </div>
        <div>
          <a
            href="https://www.instagram.com/oluoch_jnr/"
            target="_blank"
            className="fa fa-instagram"
          ></a>
          <span>instagram/oluoch_jnr</span>
        </div>
        <div>
          <a
            href="https://twitter.com/blvck_code"
            target="_blank"
            className="fa fa-twitter"
          ></a>
          <span>twitter/blvck_code</span>
        </div>
      </div>
      <div className="line"></div>
    </aside>
  );
}

export default LeftSide;
