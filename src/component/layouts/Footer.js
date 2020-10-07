import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Designed &amp; Built by Brian Maurice Oluoch </p>
        <a href="https://github.com/blvck-code/portfolio-frontend-v1--"target="_blank">
          <small style={{color:"#64ffda"}}>Souce Code</small>{" "}<i className="fa fa-code"></i>
        </a>
        <small style={{ fontStyle: "italic" }}>
          Copyright &copy; 2020
        </small>
      </footer>
    );
  }
}

export default Footer;
