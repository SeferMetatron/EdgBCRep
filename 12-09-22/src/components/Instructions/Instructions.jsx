import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

export const Instructions = () => {
  const data = useOutletContext();

  return (
    <div className={styles.instruction}>
      <h3>Instructions</h3>
      <div className={styles.mainContent}>
        <img
          className={styles.thumbnail}
          src={data.thumbnail}
          alt={data.name}
        />
        <p className={styles.text}> {data.instruction}</p>
      </div>
    </div>
  );
};

export default Instructions;
