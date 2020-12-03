import React, { Component } from "react";
import PasswordChange from "./PasswordChange";
import StatusChange from "./StatusChange";

class ChangeControl extends Component {
  render() {
    if (this.props.form === "password") {
      return (
        <PasswordChange
          changePassword={this.props.changePassword}
        />
      );
    }

    if (this.props.form === "status") {
      return (
        <StatusChange
          changeStatus={this.props.changeStatus}
        />
      );
    }

    return null;
  }
}

export default ChangeControl;
