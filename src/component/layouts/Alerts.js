import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

export class Alerts extends Component {
  componentDidUpdate(prevProps) {
    const { errors } = this.props;

    if (errors !== prevProps.errors) {
      setTimeout(() => {
        document.querySelector(".alerts").classList.add("showAlert");
      }, 0);
      setTimeout(() => {
        document.querySelector(".alerts").classList.remove("showAlert");
      }, 4000);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(Alerts);
