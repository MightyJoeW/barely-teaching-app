// EXTERNAL DEPENDENCIES
import React from "react";
import Modal from "react-modal";

// COMPONENT DEFINITION
const OptionModal = ({ selectedOption, handleClearSelectedOption }) => (
  <Modal
    isOpen={!!selectedOption} // !! convert to real boolean values
    onRequestClose={handleClearSelectedOption} //close modal with esc or clicking outside of modal
    contentLabel="Selected Option" // for accessibility
    closeTimeoutMS={200} //amount of time to wait before gutting the div
    className="modal"
  >
    <h3 className="modal__title"> Selected Option </h3>
    {selectedOption && <p className="modal__body">{selectedOption}</p>}
    <button className="button" onClick={handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
