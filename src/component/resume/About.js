import React from "react";
import AOS from "aos";

function About() {
  const right = [
    {
      title: "Name",
      value: "Oluoch Maurice Brian",
    },
    {
      title: "Date of Birth",
      value: "25 November 1995",
    },
    {
      title: "Spoken Languages",
      value: "English - Kiswahili",
    },
    {
      title: "Nationality",
      value: "Kenyan",
    },
    {
      title: "Interest",
      value: "Music, Football, Travel",
    },
  ];

  const name = "I'm Maurice";

  const info = `A self-taught developer who enjoys creating things that live on
  the internet, websites, applications or anything in between. My main
  goal is to always build products that provide pixel-perfect,
  perfomant experiences.`;

  return (
    <section className="resume__about">
      <h1 className="section__heading">About Me !</h1>
      <div className="resume__content">
        <div className="content__left">
          <h2>{name}</h2>
          <p>{info}</p>
          <button>Downlod CV</button>
        </div>
        <div className="content__right">
          {right?.map(({ title, value }, idx) => (
            <p key={idx}>
              <span>{title}</span>
              <span>{value}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
