import styles from "./index.scss";

const MainModal = ({ modalData, setVisibility }) => {
  const { title, overview, release_date } = modalData;
  const onClickClose = () => {
    setVisibility(false);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{overview}</p>
        <p>{release_date}</p>
      </div>
      <button onClick={onClickClose}>X</button>
    </div>
  );
};

export default MainModal;
