import React from "react";
import AOS from "aos";

function About() {
  return (
    <section className="resume__about">
      <h1 className="section__heading">About Me !</h1>
      <div className="resume__content">
        <div className="content__left">
          <h2>I'm Oluoch Maurice Brian</h2>
          <p>
            I enjoy creating things that live on the internet, websites,
            applications or anything in between. My main goal is to always build
            products that provide pixel-perfect, perfomant experiences.
          </p>
          <button>Downlod CV</button>
        </div>
        <div className="content__right">
          <p>
            <span>Name</span>
            <span>Oluoch Maurice Brian</span>
          </p>
          <p>
            <span>Date of Birth</span>
            <span>25 November 1995</span>
          </p>
          <p>
            <span>Spoken Languages</span>
            <span>English - Kiswahili</span>
          </p>
          <p>
            <span>Nationality</span>
            <span>Kenyan</span>
          </p>
          <p>
            <span>Interest</span>
            <span>Music, Football, Travel</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
