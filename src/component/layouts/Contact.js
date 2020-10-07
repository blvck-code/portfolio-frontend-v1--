import React, { Component } from "react";

export class Contact extends Component {
  openModal = () => {
    document.getElementById("modal").style.display = "block";
  };
  render() {
    return (
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="title">
            <p>04. What's Next?</p>
            <h1>Get In Touch</h1>
          </div>
          <p>
            My inbox is always open whether for both job (and freelancing)
            opportunities or just to say hi, I'll try my best to answer your
            email.
          </p>
          <button onClick={this.openModal} className="btn btn-primary">
            Say Hello
          </button>
          <div className="wabbleIcon">
            <a href="#header">
              <i className="fa fa-angle-double-up"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
