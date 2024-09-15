import React, { useContext, useState } from "react";
import { DisplayModalProps, ModalModel } from "../domain/ModalInterface";
import { ModalContext } from "../context/modal_context/ModalProvider";
import { createPortal } from "react-dom";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";

function Modal({ modalId, modalTitle }: ModalModel) {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const contextTest = useContext(ModalContext);
  const handleClick = (modalId: string) => {
    console.log(contextTest?.data);
    setDisplayModal(true);
    // contextTest?.updateList(modalId);
  };
  const DisplayModal: React.FC<DisplayModalProps> = ({ modalId }) => {
    return createPortal(
      <div
        className="popup__container"
        onClick={() => setDisplayModal((prev) => !prev)}
      >
        <div>
          <p>This is a modal</p>
          <button onClick={() => setDisplayModal(false)}>close modal</button>
        </div>
      </div>,
      document.getElementById("portal") as HTMLElement
    );
  };

  return (
    <div className="modal__container">
      <p>{modalTitle}</p>
      <button
        onClick={() => {
          handleClick(modalId);
        }}
      >
        <PiDotsThreeOutlineVertical />
      </button>
      {displayModal && <DisplayModal modalId={modalId} />}
    </div>
  );
}

export default Modal;
