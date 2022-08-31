import { useState, useEffect, useRef } from "react";
import "./index.css";

const MainInput = ({ onHandleSubmit }) => {
  const inputRef = useRef(null);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className={`MainInput ${isActive && "active"}`}>
      <input
        ref={inputRef}
        onChange={onHandleSubmit}
        type="text"
        minLength={6}
      />
      <button type="submit" onClick={() => setActive(!isActive)}>
        Search
      </button>
    </form>
  );
};

export default MainInput;
