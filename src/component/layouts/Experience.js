import React, { Component } from "react";
import Title from "../common/Title";
import AOS from "aos";

export class Experience extends Component {
  handleEdu = (e) => {
    this.removeBorder();
    this.removeContent();
    e.target.classList.add("active");
    document.querySelector(`#${e.target.id}-content`).classList.add("show");
  };
  componentDidMount() {
    AOS.init();
  }

  removeBorder = () => {
    document
      .querySelectorAll(".edu-item")
      .forEach((item) => item.classList.remove("active"));
  };

  removeContent = () => {
    document
      .querySelectorAll(".edu-content-item")
      .forEach((item) => item.classList.remove("show"));
  };
  render() {
    return (
      <section className="experience" id="experience">
        <div className="experience-inner">
          <h1 className="expe-text">Experience</h1>
          <Title title="Where I've Worked" num="02." />
          <div className="content">
            <div className="company">
              <ul>
                <li
                  className="edu-item active"
                  id="edu-1"
                  onClick={this.handleEdu}>
                  Freelancing
                </li>
                <li className="edu-item" id="edu-2" onClick={this.handleEdu}>
                  Refferal Hospital
                </li>
              </ul>
            </div>
            <div
              className="description edu-content-item show"
              id="edu-1-content">
              <div className="title">
                <h2>
                  Freelancer
                  <span>
                    <i className="fa fa-at"></i>Home, Nairobi
                  </span>
                </h2>
                <p>2019 - Present</p>
              </div>
              <ul>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>
                    Write modern, perfomant and robust code for a diverse array
                    of client and internal projects
                  </p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>
                    Designing, developing, testing and implementation of
                    software solutions as per user requirements.
                  </p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>
                    Work with a variety of different languages, frameworks and
                    content management systems such as JavaScript,
                    TypeScript,React, Django, Django Rest Framework, etc.
                  </p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>
                    Communicate and collaborate with multi-disciplinary teamsof
                    engineers, designers, producers, clients and stakeholders on
                    a daily basis.
                  </p>
                </li>
              </ul>
            </div>
            <div className="description edu-content-item" id="edu-2-content">
              <div className="title">
                <h2>
                  Attachment
                  <span>
                    <i className="fa fa-at"></i>Siaya County Refferal Hospital
                  </span>
                </h2>
                <p>2019 - 2019</p>
              </div>
              <ul>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>Maintenance and repair of computer equipment.</p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>Provision of ICT support to the staff</p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>Installing, configuring and maintaining ICT systems.</p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>
                    Installation, setting up and monitoring equipment
                    performance
                  </p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>Maintaining and configuring of systems and databases.</p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>
                    Liaising with internal and external stakeholders to provide
                    technical support while monitoring, analyzing and reporting
                    on systems performance. Troubleshooting malfunction systems.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
