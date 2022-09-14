import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

const Instructions = () => {
  const data = useOutletContext;

  return (
    <div className={styles.instruction}>
      <h3>Instructions</h3>
      <div className={styles.mainContent}>
        <p className={styles.text}> {data.instruction}</p>
        <img
          className={styles.thumbnail}
          src={data.thumbnail}
          alt={data.name}
        />
      </div>
    </div>
  );
};

export default Instructions;
