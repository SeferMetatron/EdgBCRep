import "./index.css";

const Input = ({ input }) => {
  return (
    <div>
      <input
        className="inpit"
        name="task"
        placeholder="Add a task..."
        type="text"
        value={input}
        required
      />
    </div>
  );
};

export default Input;
