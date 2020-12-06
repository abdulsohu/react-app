import React, { Component } from "react";
import {
  handlePasswordChange,
  handleStatusChange,
  deactivateUser,
} from "./AxiosFunctions.js";

import "bulma/css/bulma.css";

import Modal from "./Modal";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      mode: "",
      status: "",
      password: "",
      oldPassword: "",
      user: "dummy1",
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeOldPassword = this.changeOldPassword.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
    this.handleClickForOptions = this.handleClickForOptions.bind(this);
  }

  showModal = (modalMode) => {
    this.setState({ show: true, mode: modalMode });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  changePassword = (newPassword) => {
    this.setState({ password: newPassword });
  };

  changeOldPassword = (old) => {
    this.setState({ oldPassword: old });
  };

  changeStatus = (newStatus) => {
    this.setState({ status: newStatus });
  };

  handleClickForOptions = () => {
    if (this.state.mode === "status") {
      let promise = handleStatusChange(this.state.user, this.state.status);

      promise.then(
        (result) => {
          if (result.status === 200) {
            this.setState({ show: false });
          }
        },
        (err) => {
          alert(err);
        }
      );
    }

    if (this.state.mode === "password") {
      let promise = handlePasswordChange(
        this.state.user,
        this.state.oldPassword,
        this.state.password
      );

      promise.then(
        (result) => {
          if (result.status === 200) {
            this.setState({ show: false });
          }
        },
        (err) => {
          alert(err);
        }
      );
    }

    if (this.state.mode === "deactivate") {
      if (deactivateUser(this.state.user) === 200) {
        this.setState({ show: false });
      }
    }
  };

  render() {
    return (
      <section className="section" style={{ paddingTop: "1rem" }}>
        <title>Account</title>

        <div className="container">
          <div className="columns">
            <div className="column is-one-fourth"> </div>

            <div className="column" style={{ paddingTop: "3em" }}>
              {/**
               * The following is user info. in a card
               */}

              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Current Profile"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img
                          src="https://bulma.io/images/placeholders/96x96.png"
                          alt="Current Profile"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">John Smith</p>
                      <p className="subtitle is-6">jsmith</p>
                    </div>
                  </div>
                  <div className="content" style={{ textAlign: "center" }}>
                    <p className="tag is-dark">Status:</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec iaculis mauris.
                    </p>
                    <div style={{ fontSize: "smaller", textAlign: "center" }}>
                      <p>{new Date().toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Modal
                show={this.state.show}
                mode={this.state.mode}
                handleClose={this.hideModal}
                handleSubmission={this.handleClickForOptions}
                changeOldPassword={this.changeOldPassword}
                changePassword={this.changePassword}
                changeStatus={this.changeStatus}
              />

              {/**
               * The following is other user settings.
               */}

              <div
                className="columns is-centered"
                style={{ paddingTop: "2em", textAlign: "center" }}
              >
                <div className="column" style={{ padding: "0.5em" }}>
                  <button
                    className="button is-danger is-rounded is-full-width"
                    onClick={() => this.showModal("deactivate")}
                  >
                    Deactivate Account
                  </button>
                </div>
                <div className="column" style={{ padding: "0.5em" }}>
                  <button
                    className="button is-warning is-rounded is-full-width"
                    onClick={() => this.showModal("password")}
                  >
                    Change Password
                  </button>
                </div>
                <div className="column" style={{ padding: "0.5em" }}>
                  <button
                    className="button is-info is-rounded is-full-width"
                    onClick={() => this.showModal("status")}
                  >
                    Change Status
                  </button>
                </div>
              </div>
            </div>

            <div className="column"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Account;
