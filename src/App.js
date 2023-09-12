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
import IntroLoader from "./component/common/introLoader";

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
        <IntroLoader />
      ) : (
        <>
          <Status />
          <Router>
            <Suspense
              fallback={
                <div className="loading">
                  <h1 data-text="Loading...">Loading...</h1>
                </div>
              }
            >
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
