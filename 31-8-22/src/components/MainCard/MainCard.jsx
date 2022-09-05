import "./index.scss";
import { useState, memo } from "react";
import MainModal from "../MainModal/MainModal";

const MainCard = ({ data, classStyleProp = {} }) => {
  const { title, vote_average, poster_path } = data;
  const [isVisible, setVisibility] = useState(false);
  const onClickOpen = () => setVisibility(true);

  return (
    <div>
      {/* <MainModal isVisible = {isVisible}/> */}
      <div className="MainCard" style={classStyleProp} onClick={onClickOpen}>
        {/* style={classStyleProp{}} */}
        <img
          className="MainCard--img"
          src={`https://image.tmdb.org/t/p/w342${poster_path}`}
          alt={title}
        />
        <div className="MainCard__text">
          <h3 style={{ classStyleProp }}>{title}</h3>
          <p>{vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(MainCard);
