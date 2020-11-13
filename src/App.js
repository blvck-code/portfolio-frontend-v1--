import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/main.css";
import "./fontawesome/css/font-awesome.min.css";
import Homepage from "./component/pages/Homepage";
import Error from "./component/pages/Error";
import { fetchProjects } from "./actions/projects";
import { connect } from "react-redux";
import Resume from "./component/layouts/resume";
import AOS from "aos";
import "aos/dist/aos.css";
import Status from "./component/common/status";

const Archives = lazy(() => import("./component/pages/Archives"));

function App({ fetchProjects }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    fetchProjects();
    AOS.init();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 3500);
  }, []);

  return (
    <>
      {!isMounted ? (
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
      ) : (
        <>
          <Status />
          <Router>
            <Suspense
              fallback={
                <div className="loading">
                  <h1 data-text="Loading...">Loading...</h1>
                </div>
              }>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/archive" component={Archives} />
                <Route exact path="/resume" component={Resume} />
                <Route component={Error} />
              </Switch>
            </Suspense>
          </Router>
        </>
      )}
    </>
  );
}

export default connect(null, { fetchProjects })(App);
