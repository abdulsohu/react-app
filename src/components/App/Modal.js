import React from "react";
import ChangeControl from "./ChangeControl.js";

const Modal = ({
  show,
  mode,
  handleClose,
  handleSubmission,
  changeOldPassword,
  changePassword,
  changeStatus,
}) => {
  const toDisplay = show ? "flex" : "none";
  const deactivateMessage = `We take your departure very seriously. Account deactivation locks
  away your account in a deep dark abyss; a point of no return.
                You will have to make another account if you ever choose to come
                back.`;
  const changeMessage = `Hey there, you are about to change your password. Are you sure about this?`;

  let ui = "status";
  let message =
    "Hey there, you are about to change your status. Are you sure about this?";
  let buttonClass = "button is-info";
  let buttonMessage = "Change Status";
  let headerMessage = "GAB Status Change";
  let ericMessage = `Don't mix package managers. It gets really messy.`;

  if (mode === "deactivate") {
    ui = "deactivate";
    message = deactivateMessage;
    buttonClass = "button is-danger";
    buttonMessage = "Deactivate Account";
    headerMessage = "GAB Account Deactivation";
    ericMessage = "You know, some of these things are just hard to undo!";
  } else if (mode === "password") {
    ui = "password";
    message = changeMessage;
    buttonClass = "button is-warning";
    buttonMessage = "Change Password";
    headerMessage = "GAB Account Password Change";
    ericMessage = "We have to make sure these things are secure.";
  }

  return (
    <div className="modal modal-background" style={{ display: toDisplay }}>
      <section>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{headerMessage}</p>
            <button
              className="delete"
              aria-label="close"
              onClick={handleClose}
            ></button>
          </header>
          <section className="modal-card-body">
            <div className="content">
              <h1>{buttonMessage}</h1>
              <blockquote style={{ borderRadius: "7px" }}>
                {ericMessage}
                <br />
                <div style={{ textAlign: "right" }}>
                  - Fouh Mbindi, Eric Noel{" "}
                </div>{" "}
              </blockquote>

              <ChangeControl
                form={ui}
                changeOldPassword={changeOldPassword}
                changePassword={changePassword}
                changeStatus={changeStatus}
              />

              <p>{message}</p>
              <h3>I understand and confirm.</h3>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className={buttonClass} onClick={handleSubmission}>{buttonMessage}</button>
            <button className="button" onClick={handleClose}>
              Cancel
            </button>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Modal;
