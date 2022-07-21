import "./modal.css";

const Modal = ({ source, visibility, closeModal }) => {
  return (
    <>
      {visibility ? (
        <div className="Modal" onClick={closeModal}>
          <img src={source} alt="ok" />
        </div>
      ) : null}
    </>
  );
};
export default Modal;
