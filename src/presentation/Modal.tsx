import React, { useContext, useEffect, useRef, useState } from "react";
import { DisplayModalProps, ModalModel } from "../domain/ModalInterface";
import { ModalContext } from "../context/modal_context/ModalProvider";
import { createPortal } from "react-dom";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

function Modal(props: ModalModel) {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const contextTest = useContext(ModalContext);
  const handleClick = () => {
    setDisplayModal(true);
  };

  const DisplayModal: React.FC<DisplayModalProps> = ({ modalId }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const contextTest = useContext(ModalContext);
    useEffect(() => {
      buttonRef.current?.focus();
    }, []);
    const deleteClick = async (modalId: string) => {
      contextTest?.updateList(modalId);
      setDisplayModal(false);
    };

    return createPortal(
      <div className="popup" onClick={() => setDisplayModal((prev) => !prev)}>
        <div onClick={(e) => e.stopPropagation()} className="popup__container">
          <h4>This is a modal</h4>
          <p>Are you sure you want to delete?</p>
          <div className="buttons">
            <button onClick={() => setDisplayModal(false)} ref={buttonRef}>
              Cancel
            </button>
            <button onClick={() => deleteClick(modalId)} ref={buttonRef}>
              Delete
            </button>
          </div>
        </div>
      </div>,
      document.getElementById("portal") as HTMLElement
    );
  };

  return (
    <div className="modal__container">
      <p
        onClick={() => {
          contextTest?.selectData(props);
        }}
      >
        {props.modalTitle}
      </p>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        <PiDotsThreeOutlineVertical />
      </button>
      {displayModal && <DisplayModal modalId={props.modalId} />}
    </div>
  );
}

export default Modal;
