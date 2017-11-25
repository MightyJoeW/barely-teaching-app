import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption} // !! convert to real boolean values
    onRequestClose={props.handleClearSelectedOption} //close modal with esc or clicking outside of modal
    contentLabel="Selected Option" // for accessibility
  >
    <h3> Selected Option </h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}> Okay </button>
  </Modal>
);

export default OptionModal;
