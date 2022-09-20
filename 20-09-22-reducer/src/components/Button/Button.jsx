import styles from "./index.module.scss";

const Button = (onClick, prop) => {
  return (
    <div className={styles.ButtonC}>
      <button className={styles.Button} onClick={onclick}>
        {prop}
      </button>
    </div>
  );
};

export default Button;
