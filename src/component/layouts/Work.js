import React from "react";
import Title from "../common/Title";
import img from "../../img/website.jpg";
import { connect } from "react-redux";
import { fetchProjects } from "../../actions/projects";

function Work({ fetchProjects, items, loading }) {
  const { projects } = items;

  return (
    <section className="work" id="work">
      <div className="work-inner">
        <h1 className="work-text">Major Projects</h1>
        <Title title="Some Things I've Built" num="03." />
        <div style={{ marginTop: 30 }} className="content">
          {loading ? (
            <div className="loading">
              <h1 data-text="Loading...">Loading...</h1>
            </div>
          ) : (
            <>
              {projects.length > 0 && (
                <>
                  {projects.map((item) =>
                    item.special === true ? (
                      <div key={item.id} className="work-item">
                        <div className="img">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={item.image} alt="WebsiteImg" />
                          </a>
                        </div>
                        <div className="body">
                          <p>Featured Project</p>
                          <h2>{item.title}</h2>
                          <p className="summary">{item.desc}</p>
                          <ul>
                            {item.tools.split(",").map((tool, i) => (
                              <li key={i}>{tool}</li>
                            ))}
                          </ul>
                          <div className="links">
                            {item.github ? (
                              <a
                                href={item.github}
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="fa fa-github"></i>
                              </a>
                            ) : (
                              <span>—</span>
                            )}
                            {item.link ? (
                              <a
                                href={item.link}
                                rel="noopener noreferrer"
                                target="_blank">
                                <i className="fa fa-external-link"></i>
                              </a>
                            ) : (
                              <span>—</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  items: state.projects,
  loading: state.projects.loading,
});

export default connect(mapStateToProps, { fetchProjects })(Work);
