import "./index.css";

const Input = ({ onChange, pippo }) => {
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
      {pippo}
    </div>
  );
};
export default Input;
