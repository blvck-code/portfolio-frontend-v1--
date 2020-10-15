import React, { Component } from "react";
import AOS from "aos";

export class Header extends Component {
  componentDidMount() {
    AOS.init();
  }

  openModal = () => {
    document.getElementById("modal").style.display = "block";
    document.getElementById("form").style.transform = "scale(1)";
  };

  clickOutside = (e) => {
    if (
      e.target === document.querySelector(".modal") ||
      e.target === document.querySelector(".modal-content")
    ) {
      document.getElementById("modal").style.display = "none";
    }
  };

  render() {
    document.title = "Portfolio | Oluoch Maurice Brian";
    window.addEventListener("click", this.clickOutside);

    return (
      <header id="header" data-aos="fade-left">
        <div className="showcase">
          <p>Hi, my name is</p>
          <h1>Brian Maurice Oluoch.</h1>
          <h1>I build things for the web.</h1>
          <p className="decs">
            I'm a developer based in Nairobi, Kenya specialized in <br />
            building (and occasionally designing) exceptional, high-quality
            <br /> websites and their backends.
          </p>

          <button onClick={this.openModal} className="btn btn-primary">
            Get In Touch
          </button>

          <div className="wabbleIcon">
            <a href="#about">
              <i className="fa fa-angle-double-down"></i>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
