import Button from "../Button";
import "./index.css";

const Modal = ({ modalTextContent, onModalConfirm, setModalVisibility }) => {
  const onConfirmBtn = () => {
    onModalConfirm();
    setModalVisibility(false);
  };

  const onCancelBtn = () => {
    setModalVisibility(false);
  };

  return (
    <div className="Modal">
      <p>{modalTextContent}</p>
      <div className="Modal__btns">
        <Button
          onHandleClick={onCancelBtn}
          textContent="Annulla"
          color="lightcoral"
          type="button"
        />
        <Button
          onHandleClick={onConfirmBtn}
          textContent="Conferma"
          color="lightseagreen"
          type="button"
        />
      </div>
    </div>
  );
};

export default Modal;
