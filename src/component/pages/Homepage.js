import React, { useEffect, useState } from "react";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import About from "../layouts/About";
import Experience from "../layouts/Experience";
import Work from "../layouts/Work";
import Contact from "../layouts/Contact";
import Projects from "../layouts/Projects";
import Alerts from "../layouts/Alerts";
import ContactsModal from "../common/ContactsModal";
import Icons from "../layouts/Icons";
import LeftSide from "../common/LeftSide";
import RightSide from "../common/RightSide";

import { connect } from "react-redux";
import { fetchProjects } from "../../actions/projects";
import Navbar from "../layouts/Navbar";

document.title = "Portfolio | Oluoch Maurice Brian";

function Homepage({ error }) {
  return (
    <>
      <Navbar />
      <main>
        <Alerts />
        <ContactsModal />
        <LeftSide />
        <Header />
        <About />
        <Experience />
        <Work />
        <Projects />
        <Contact />
        <Icons />
        <RightSide />
        <div className="alerts">
          {error.msg.error ? (
            <>
              <i className="fa fa-exclamation"></i>
              <h5>{error.msg.error}</h5>
            </>
          ) : (
            ""
          )}

          {error.msg.success ? (
            <>
              <i className="fa fa-check"></i>
              <h5>{error.msg.success}</h5>
            </>
          ) : (
            ""
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  error: state.errors,
});

export default connect(mapStateToProps, { fetchProjects })(Homepage);
