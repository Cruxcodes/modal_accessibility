import React, { useContext } from "react";
import "./App.css";
import "./styles/styles.css";
import Modal from "./presentation/Modal";
import ModalProvider, {
  ModalContext,
} from "./context/modal_context/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <div>
          <ModalDisplay />
        </div>
      </div>
    </ModalProvider>
  );
}
export default App;

function ModalDisplay() {
  const contextTest = useContext(ModalContext);

  return (
    <div className="main__container">
      <div className="modal">
        {contextTest?.data.map((element, index) => {
          return <Modal key={index} {...element} />;
        })}
      </div>
      <div>
        {contextTest?.selectedData?.modalTitle}
      </div>
    </div>
  );
}
