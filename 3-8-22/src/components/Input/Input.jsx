import "./index.css";

const Input = ({ onChange, children }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className="input">
      <input
        name="task"
        placeholder="Add task"
        onChange={handleChange}
        type="text"
      />
      {children}
    </div>
  );
};
export default Input;
