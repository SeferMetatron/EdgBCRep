import { useState, useEffect, useRef } from "react";
import styles from "./index.module.scss";

const MainInput = ({ onHandleSubmit }) => {
  const inputRef = useRef(null);
  const mainInput = useRef(null);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 900) {
        mainInput.current.style.display = "flex";
      } else {
        mainInput.current.style.display = "none";
      }
    });
  }, []);

  return (
    <form className={styles.MainInput }>
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
