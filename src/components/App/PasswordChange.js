import React, { Component } from "react";

class PasswordChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      confirmValue: '',
      oldValue: ''
    };
    this.handleOrignalChange = this.handleOrignalChange.bind(this);
    this.handleConfirmationChange = this.handleConfirmationChange.bind(this);
    this.handleOldChange = this.handleOldChange.bind(this);
  }

  handleOldChange(e) {
      this.setState({oldValue: e.target.value});
      this.props.changeOldPassword(e.target.value);
  }

  handleOrignalChange(e) {
    this.setState({ value: e.target.value });
    this.props.changePassword(e.target.value);
  }

  handleConfirmationChange(e) {
    this.setState({ confirmValue: e.target.value });
  }

  render() {
    let match;
    let passwordsMatch;
    if (this.state.value === "" && this.state.confirmValue === "") {
      match = "";
      passwordsMatch = "";
    } else if (this.state.value === this.state.confirmValue) {
      match = "is-success";
      passwordsMatch = "Passwords match!";
    } else {
      match = "is-danger";
      passwordsMatch = "Passwords don't match!";
    }

    return (
      <div>
        <div
          className="field"
          style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}
        >
          <p className="control">
            <input
              className="input"
              type="password"
              placeholder="Current Password"
              value={this.state.oldValue}
              onChange={this.handleOldChange}
            />
          </p>
          <p className="control">
            <input
              className={`input ${match}`}
              type="password"
              placeholder="New Password"
              value={this.state.value}
              onChange={this.handleOrignalChange}
            />
          </p>
          <p className="control">
            <input
              className={`input ${match}`}
              type="password"
              placeholder="Confirm New Password"
              value={this.state.confirmValue}
              onChange={this.handleConfirmationChange}
            />
          </p>
          <p className={`help ${match}`}>{passwordsMatch}</p>
        </div>
      </div>
    );
  }
}

export default PasswordChange;
