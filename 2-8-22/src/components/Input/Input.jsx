import { useState } from "react";
// import Button from "../Button/Button";
import "./index.css";

const Input = () => {
  const [toDoInput, setToDoInput] = useState("");
  return (
    <div className="input">
      <input
        type="text"
        value={toDoInput}
        onChange={(e) => setToDoInput(e.target.value)}
        placeholder={"Add something to do..."}
        required
      />
    </div>
  );
};
export default Input;
