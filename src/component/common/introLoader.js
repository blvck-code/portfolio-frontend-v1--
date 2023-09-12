import React from "react";

const IntroLoader = () => {
  return (
    <div className="preloader">
      <span className="loader"></span>
      <div className="wrapper">
        <div className="container">
          <p className="animate animate1" data-typing="i">
            I
          </p>
          <p className="animate animate2" data-typing="fullstack">
            'm fullstack
          </p>
          <p className="animate animate3" data-typing="engineer">
            Engineer
          </p>
          <p className="animate animate4" data-typing="with">
            with
          </p>
          <p className="animate animate5" data-typing="javascript">
            JavaScript
          </p>
          <p className="animate animate6" data-typing="reactjs">
            React.js
          </p>
          <p className="animate animate7" data-typing="scss">
            S(C)SS
          </p>
          <p className="animate animate8" data-typing="python">
            Python
          </p>
          <p className="animate animate9" data-typing="django">
            Django
          </p>
          <p className="animate animate10" data-typing="mysql">
            MySQL
          </p>
          <p className="animate animate11" data-typing="postgresql">
            PostgreSQL
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroLoader;
