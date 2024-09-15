import React, { useContext } from "react";
import logo from "./logo.svg";
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
    <div className="modal">
      {contextTest?.data.map((element, index) => {
        return <Modal key={index} {...element} />;
      })}
    </div>
  );
}
