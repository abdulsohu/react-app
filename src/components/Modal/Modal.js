import React from "react";
import "bulma/css/bulma.css";
import styles from "modal.module.css";

const Modal = ({ handleClose, show }) => {
  const showHideClassName = show ? styles.displayblock : styles.displaynone;

  return (
    <div className={showHideClassName}>
      <div className="modal">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">Hello World</section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button" onClick={handleClose}>Cancel</button>
        </footer>
      </div>
    </div>
    </div>
  );
}

export default Modal;
