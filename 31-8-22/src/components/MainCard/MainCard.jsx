import styles from "./index.module.scss";
import { useState, memo } from "react";
import MainModal from "../MainModal/MainModal";

const MainCard = ({ data, classStyleProp = {} }) => {
  const { title, vote_average, poster_path } = data;
  const [isVisible, setVisibility] = useState(false);
  const onClickOpen = () => setVisibility(true);

  return (
    <div>
      {/* <MainModal isVisible = {isVisible}/> */}
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
