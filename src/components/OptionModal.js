import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption} // !! convert to real boolean values
    onRequestClose={props.handleClearSelectedOption} //close modal with esc or clicking outside of modal
    contentLabel="Selected Option" // for accessibility
    closeTimeoutMS={200} //amount of time to wait before gutting the div
    className="modal"
  >
    <h3 className="modal__title"> Selected Option </h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
