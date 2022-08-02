import "./index.css";

const Button = ({
  btnTextContent = "",
  type = "button",
  onHandleClick = () => {},
}) => {
  return (
    <button onClick={onHandleClick} type={type} className="Button">
      {btnTextContent}
    </button>
  );
};

export default Button;
