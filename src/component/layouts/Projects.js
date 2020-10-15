import React from "react";
import { Link } from "react-router-dom";
import folder from "../../img/icons8-opened-folder.svg";
import { fetchProjects } from "../../actions/projects";
import minus from "../../img/icons8-minus-24.png";
import { connect } from "react-redux";

function Projects({ projects, loading, fetchProjects }) {
  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        <div className="title">
          <h2>Other Noteworthy Projects</h2>
          <Link to="/archive">
            <p>
              view the archive
              <div className="underline" />
            </p>
          </Link>
        </div>
        <div className="row">
          {loading ? (
            <div className="loading">
              <span>Loading...</span>
            </div>
          ) : (
            <>
              {projects.length > 0 &&
                projects.map((item, idx) => (
                  <div className="project-item" key={idx}>
                    <div className="project-body">
                      <div className="project-top">
                        <img src={folder} color="red" alt="folder" />
                        <div className="links">
                          {item.github ? (
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer">
                              <i className="fa fa-github" />
                            </a>
                          ) : (
                            <img src={minus} alt="minus" />
                          )}
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer">
                              <i className="fa fa-external-link" />
                            </a>
                          ) : (
                            <img src={minus} alt="minus" />
                          )}
                        </div>
                      </div>
                      <div className="project-desc">
                        <h3 className="project-title">{item.title}</h3>
                        <p className="project-decs">{item.desc}</p>
                      </div>
                    </div>
                    <div className="project-footer">
                      <ul>
                        {item.tools.split(",").map((tool, i) => (
                          <li key={i}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
        <Link to="/archive">
          <button className="btn btn-primary">Show More</button>
        </Link>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  projects: state.projects.projects.slice(0, 6),
  loading: state.projects.loading,
});

export default connect(mapStateToProps, { fetchProjects })(Projects);
