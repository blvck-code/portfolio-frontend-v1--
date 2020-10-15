import React, { Component } from "react";
import Footer from "../layouts/Footer";
import { connect } from "react-redux";
import { fetchProjects } from "../../actions/projects";
import LeftSide from "../common/LeftSide";
import RightSide from "../common/RightSide";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import myUrl from "../../actions/myUrls";
import TimelineItem from "../layouts/TimelineItem";

export class Archives extends Component {
  state = {
    isMounted: false,
    showMenu: false,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 0);
  }

  toggleMenu = () => {
    const { showMenu } = this.state;
    const menuBtn = document.querySelector(".menu-btn");
    const navItem = document.querySelector(".nav-items");

    if (!showMenu) {
      menuBtn.classList.add("close");
      navItem.classList.add("close");
      // root.style.filter = "blur(3px)"
      this.setState({ showMenu: true });
    } else if (showMenu) {
      menuBtn.classList.remove("close");
      navItem.classList.remove("close");
      // root.style.filter = "blur(0px)"
      this.setState({ showMenu: false });
    }
  };

  closeMenu = () => {
    const { showMenu } = this.state;
    const menuBtn = document.querySelector(".menu-btn");
    const navItem = document.querySelector(".nav-items");

    menuBtn.classList.remove("close");
    navItem.classList.remove("close");
    this.setState({ showMenu: false });
  };

  render() {
    const { projects } = this.props;
    const { isMounted } = this.state;

    document.title = "Archives | Oluoch Maurice Brian";

    return (
      <>
        <nav id="navbar">
          <div className="navbar">
            <Link to="/">
              <div className="nav-logo">
                <svg
                  id="logo"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100">
                  <title>Loader Logo</title>
                  <g>
                    <g id="B" transform="translate(11.000000, 5.000000)">
                      <path
                        d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                        fill="currentColor"
                      />
                    </g>
                    <path
                      stroke="rgb(100, 255, 218)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
                    />
                  </g>
                </svg>
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <div className="nav-menu">
              <div className="menu-btn" onClick={this.toggleMenu}>
                <span className="line-btn"></span>
                <span className="line-btn"></span>
                <span className="line-btn"></span>
              </div>
              <ul className="nav-items">
                <a
                  onClick={this.closeMenu}
                  className="nav-item"
                  href={`${myUrl}/#about`}>
                  <li>
                    <span className="text-secondary">01.</span>About
                  </li>
                </a>
                <a
                  onClick={this.closeMenu}
                  className="nav-item"
                  href={`${myUrl}/#education`}
                  onClick={this.navPage}>
                  <li>
                    <span className="text-secondary">02.</span>Experience
                  </li>
                </a>
                <a
                  onClick={this.closeMenu}
                  className="nav-item"
                  href={`${myUrl}/#work`}>
                  <li>
                    <span className="text-secondary">03.</span>Work
                  </li>
                </a>
                <a
                  onClick={this.closeMenu}
                  className="nav-item"
                  href={`${myUrl}/#contact`}>
                  <li>
                    <span className="text-secondary">04.</span>Contact
                  </li>
                </a>
                <Link
                  onClick={this.closeMenu}
                  className="nav-item"
                  to="/resume">
                  <li>
                    <button className="btn btn-primary">Resume</button>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        <section className="archives">
          <LeftSide />
          <div className="archives-inner">
            <div className="title">
              <h1>Archive</h1>
              <p>Timeline of things I've worked on</p>
            </div>
            <div className="content">
              {isMounted ? (
                <>
                  {projects.length > 0 && (
                    <div className="timeline-container">
                      {projects.map((data, idx) => (
                        <TimelineItem data={data} key={idx} />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="loading">
                  <span>Loading...</span>
                </div>
              )}
            </div>
          </div>
          <RightSide />
        </section>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
});

export default connect(mapStateToProps, { fetchProjects })(Archives);
