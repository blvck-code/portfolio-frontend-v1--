import React, { Component, useState, useEffect } from "react";
import Title from "../common/Title";
import AOS from "aos";
import { previousJobs } from "../../data";

export const Experience = () => {
  const [activeJob, setActiveJob] = useState(0);

  const handleEdu = (index) => {
    setActiveJob(index);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="experience-inner">
        <h1 className="expe-text">Experience</h1>
        <Title title="Where I've Worked" num="02." />
        <div className="content">
          {/*{experience.map(item => */}

          {/*)}*/}
          <div className="company">
            <ul>
              {previousJobs.map((job, i) => (
                <li
                  key={i}
                  className={activeJob === i ? "edu-item active" : `edu-item`}
                  id={job.title}
                  onClick={() => handleEdu(i)}
                >
                  {job.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="description edu-content-item show">
            <div className="title">
              <h2>
                {previousJobs[activeJob].jobPosition}
                <span>
                  <i className="fa fa-at"></i>
                  {previousJobs[activeJob].location}
                </span>
              </h2>
              <p>
                {previousJobs[activeJob].startDate} -{" "}
                {previousJobs[activeJob].endDate}
              </p>
            </div>
            <ul>
              {previousJobs[activeJob].responsibilities.map((item, i) => (
                <li key={i}>
                  <i className="fa fa-angle-double-right"></i> <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
