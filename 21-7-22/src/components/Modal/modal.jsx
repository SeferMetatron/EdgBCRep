import "./modal.css";

const Modal = ({ url, display, onClick }) => {
  console.log(url);
  return (
    <>
      {display && (
        <div onClick={onClick} className="modal">
          <img src={url} alt="Ok" />
        </div>
      )}
    </>
  );
};

export default Modal;
