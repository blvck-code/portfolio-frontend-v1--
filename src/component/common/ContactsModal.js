import React, { Component } from "react";
import { connect } from "react-redux";
import { createMsg } from "../../actions/inbox";

export class ContactsModal extends Component {
  state = {
    sender: "",
    message: "",
  };

  resetState = () => {
    this.setState({
      sender: "",
      message: "",
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createMsg(this.state);

    document.getElementById("form").classList.transform = "scale(0)";
    this.closeModal();
    this.resetState();
  };

  closeModal = () => {
    document.getElementById("modal").style.display = "none";
  };

  render() {
    const { sender, message } = this.state;

    return (
      <div className="modal" id="modal">
        <div className="modal-content">
          <form id="form" onSubmit={this.onSubmit} type="post" method="post">
            <i onClick={this.closeModal} className="fa fa-close"></i>
            <div className="form-group">
              <label htmlFor="name">Enter your name here:</label>
              <input
                type="text"
                name="sender"
                value={sender}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your message:</label>
              <textarea
                name="message"
                value={message}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { createMsg })(ContactsModal);
