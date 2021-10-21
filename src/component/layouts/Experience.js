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
                  id="edu-3"
                  onClick={this.handleEdu}>
                  Apple
                </li>
                <li className="edu-item" id="edu-1" onClick={this.handleEdu}>
                  Upwork
                </li>
                <li className="edu-item" id="edu-2" onClick={this.handleEdu}>
                  Mobi Tech
                </li>
              </ul>
            </div>
            <div
              className="description edu-content-item show"
              id="edu-3-content">
              <div className="title">
                <h2>
                  Apple
                  <span>
                    <i className="fa fa-at"></i>Ng'ong, Nairobi
                  </span>
                </h2>
                <p>2021 - Present</p>
              </div>
              <ul>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>
                    Responsible for system analysis, design, coding, testing, debugging and documentation.
                  </p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>
                  Analyzed business requirement to translate functional requirement into technical requirements using MVC.
                  </p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>
                  Made substantial changes to the architecture to improve performance of the Application.
                  </p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>
                  Responsible for the layout design, create responsive webpage and implement dynamic features by Bootstrap.
                  </p>
                </li>
              </ul>
            </div>
            <div className="description edu-content-item" id="edu-1-content">
              <div className="title">
                <h2>
                  Freelancer
                  <span>
                    <i className="fa fa-at"></i>Home, Nairobi
                  </span>
                </h2>
                <p>2020 - 2020</p>
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
                    <i className="fa fa-at"></i>Utawala
                  </span>
                </h2>
                <p>2019 - 2020</p>
              </div>
              <ul>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>Involved in development of the web application, converting to the emerging technologies.</p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>Developed custom web application interfaces using HTML and CSS3 to meet the requirements of the client.</p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>Responsible for adding the data from the APIs to the database and giving back status responses to the UI.</p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>
                  Worked on development and releases of the production under Agile/Scrum Cycles
                  </p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>Developed several REST web services supporting to perform tasks using Angular and Bootstrap.</p>
                </li>
                <li>
                  <i className="fa fa-angle-double-right"></i>{" "}
                  <p>
                  Enhanced existing web properties based on best practices and user-centered design.
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
