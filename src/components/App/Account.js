import React, { Component } from "react";
import "bulma/css/bulma.css";

import Modal from "./Modal";

class Account extends Component {
  state = { show: false, mode: "", status: "", password: "" };

  showModal = (modalMode) => {
    this.setState({ show: true, mode: modalMode });
    console.log(this.state);
  };

  hideModal = () => {
    this.setState({ show: false });
    console.log(this.state);
  };

  changePassword = (newPassword) => {
    this.setState({ password: newPassword});
    console.log('I changed the password!');
  }

  changeStatus = (newStatus)  => {
    this.setState({ status: newStatus});
    console.log('I changed the status');
  }

  deactivateAccount = () => {
    console.log('I deactivated this account');
  }

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
                handleClose={this.hideModal}
                mode={this.state.mode}
                changePassword={this.changePassword}
                changeStatus={this.changeStatus}
                deactivateAccount={this.deactivateAccount}
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
