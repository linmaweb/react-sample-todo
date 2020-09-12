import React from "react";
import Modal from "react-modal";
import { modalStyles } from "../../config";
import "./Popup.css";

const Popup = ({
  modalIsOpen,
  closeModal,
  currentTodo,
  updateTodo,
  setInputValue,
}) => {
  Modal.setAppElement("#root");
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles}>
      <div className="modalContainer">
        <div className="modalContent">
          <h2>Edit</h2>
          <i className="fa fa-window-close" onClick={closeModal}></i>
          <form>
            <input
              defaultValue={currentTodo.current.text}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={updateTodo}>Update</button>
            <button onClick={closeModal}>Cancel</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Popup;
