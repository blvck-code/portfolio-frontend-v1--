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
      percent: 87,
    },
    {
      name: "React.js",
      percent: 76,
    },
    {
      name: "Vanilla.js",
      percent: 82,
    },
    {
      name: "Django Backend",
      percent: 86,
    },
    {
      name: "UX/UI Design",
      percent: 60,
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
              <div className="timeline__item">
                <p>2015 - 2020</p>
                <p className="center">University Education</p>
                <p>Taita Taveta University</p>
              </div>
              <div className="timeline__item">
                <p>2011 - 2014</p>
                <p className="center">Secondary Education</p>
                <p>Chianda High School</p>
              </div>
              <div className="timeline__item">
                <p>2002 - 2010</p>
                <p className="center">Primary Education</p>
                <p>Karapul Primary School</p>
              </div>
            </div>
          </div>
          <div className="inner__right">
            <div className="heading">
              <Icon icon={suitcaseAlt} />
              <h5>Experience</h5>
            </div>
            <div className="timeline__wrapper">
              <div className="timeline__item">
                <p>2019 - Present</p>
                <p className="center">Freelancer</p>
                <p>Nairobi</p>
              </div>
              <div className="timeline__item">
                <p>2019 - 2019</p>
                <p className="center">Attachment</p>
                <p>Siaya County Refferal Hospital</p>
              </div>
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
