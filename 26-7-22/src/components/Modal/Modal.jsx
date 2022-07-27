import "./index.css";
import Button from "../Button";

const Modal = (modalText, setVisible, setCondition, deleteFn) => {
  return (
    <div className="Modal">
      <div className="Modal-content">
        <h2>{modalText}</h2>
        <Button
          onClick={() => {
            setCondition(false);
            setVisible(false);
          }}
          color="red"
          textContent="Cancel"
        />
        <Button
          onClick={() => {
            setCondition(true);
            deleteFn();
          }}
          color="green"
          textContent="Yes"
        />
      </div>
    </div>
  );
};

export default Modal;
