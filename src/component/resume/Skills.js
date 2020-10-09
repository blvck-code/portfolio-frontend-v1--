import React from "react";
import graduationCap from "@iconify/icons-uil/graduation-cap";
import suitcaseAlt from "@iconify/icons-uil/suitcase-alt";
import Icon from "@iconify/react";

function Skills() {
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
                <p>1998 - 2005</p>
                <p className="center">Highschool</p>
                <p>Secondary Education</p>
              </div>
              <div className="timeline__item">
                <p>2005 - 2008</p>
                <p className="center">University</p>
                <p>Bachelor of Business Information Technology</p>
              </div>
              <div className="timeline__item">
                <p>2008 - 2010</p>
                <p className="center">Master</p>
                <p>Master of Computer Science</p>
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
                <p>1998 - 2005</p>
                <p className="center">Highschool</p>
                <p>Secondary Education</p>
              </div>
              <div className="timeline__item">
                <p>2005 - 2008</p>
                <p className="center">University</p>
                <p>Bachelor of Business Information Technology</p>
              </div>
              <div className="timeline__item">
                <p>2008 - 2010</p>
                <p className="center">Master</p>
                <p>Master of Computer Science</p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills__right">
          <h1>Right</h1>
        </div>
      </div>
    </section>
  );
}

export default Skills;
