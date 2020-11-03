import React, { useEffect } from "react";
import graduationCap from "@iconify/icons-uil/graduation-cap";
import suitcaseAlt from "@iconify/icons-uil/suitcase-alt";
import Icon from "@iconify/react";

function Skills() {
  useEffect(() => {
    const bars = document.querySelectorAll(".progress__wrapper .progress__bar");
    bars.forEach((bar) => {
      let percentage = bar.dataset.percent;
      let tooltip = bar.children[0];
      tooltip.innerText = percentage + "%";
      bar.style.width = percentage + "%";
    });
  }, []);

  const skills = [
    {
      name: "HTML & SCSS",
      percent: 80,
    },
    {
      name: "React.js",
      percent: 72,
    },
    {
      name: "Vanilla.js",
      percent: 78,
    },
    {
      name: "Django Backend",
      percent: 74,
    },
    {
      name: "UX/UI Design",
      percent: 55,
    },
  ];

  const education = [
    {
      duration: "2015 - 2020",
      level: "University Education",
      school: "Taita Taveta University",
    },
    {
      duration: "2011 - 2014",
      level: "Secondary Education",
      school: "Chianda High School",
    },
    {
      duration: "2002 - 2010",
      level: "Primary Education",
      school: "Karapul Primary School",
    },
  ];

  const experience = [
    {
      duration: "2019 - Present",
      job: "Freelancer",
      location: "Nairobi",
    },
    {
      duration: "2019 - 2019",
      job: "Attachment",
      location: "Siaya County Refferal Hospital",
    },
  ];

  return (
    <section className="resume__skills">
      <h1 className="section__heading">Education & Skills</h1>
      <div className="content">
        <div className="skills__left">
          <div className="inner__left">
            <div className="heading">
              <Icon icon={graduationCap} />
              <h5>Education</h5>
            </div>
            <div className="timeline__wrapper">
              {education?.map(({ duration, level, school }, idx) => (
                <div key={idx} className="timeline__item">
                  <p>{duration}</p>
                  <p className="center">{level}</p>
                  <p>{school}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="inner__right">
            <div className="heading">
              <Icon icon={suitcaseAlt} />
              <h5>Experience</h5>
            </div>
            <div className="timeline__wrapper">
              {experience?.map(({ duration, job, location }, idx) => (
                <div key={idx} className="timeline__item">
                  <p>{duration}</p>
                  <p className="center">{job}</p>
                  <p>{location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="skills__right">
          <div className="skills__wrapper">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill__box">
                <h4>{skill.name}</h4>
                <div className="progress__wrapper">
                  <span data-percent={skill.percent} className="progress__bar">
                    <span className="tooltip">{skill.percent}%</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
