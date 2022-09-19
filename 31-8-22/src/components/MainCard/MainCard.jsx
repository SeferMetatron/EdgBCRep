import styles from "./index.module.scss";
import { memo, useContext } from "react";

const MainCard = ({ data, classStyleProp = {} }) => {
  const { title, vote_average, poster_path } = data;
  const onClickOpen = () => setVisibility(true);
  const modalStatus = useContext(modalVisibility);
  const { isVisible, setVisibility } = modalStatus;

  return (
    <div>
      <div
        className={styles.MainCard}
        style={classStyleProp}
        onClick={onClickOpen}
      >
        {/* style={classStyleProp{}} */}
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={title}
        />
        <div className={styles.text}>
          <h3 style={{ classStyleProp }}>{title}</h3>
          <p>{vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(MainCard);
