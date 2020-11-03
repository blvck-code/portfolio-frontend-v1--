import React, { Component } from "react";
import AOS from "aos";
import { header } from "../../data";

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
    document.title = "Oluoch Maurice Brian";
    window.addEventListener("click", this.clickOutside);

    const {
      titleOne,
      titleTwo,
      titleThree,
      infOne,
      infTwo,
      infThree,
      btn,
    } = header;

    return (
      <header id="header">
        <div className="showcase">
          <p>{titleOne}</p>
          <h1>{titleTwo}</h1>
          <h1 className="faded">{titleThree}</h1>
          <p className="decs">
            {infOne} <br />
            {infTwo}
            <br /> {infThree}
          </p>

          <button onClick={this.openModal} className="btn btn-primary">
            {btn}
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
