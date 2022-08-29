import "./index.css";

const Button = ({ onClick, btnTextContent }) => {
  return (
    <button onClick={onClick} className="baton">
      {btnTextContent}
    </button>
  );
};

export default Button;
