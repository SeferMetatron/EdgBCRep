import "./index.css";
import { useState } from "react";
import MainModal from "../MainModal/MainModal";

const MainCard = ({ data, classStyleProp = {} }) => {
  const { title, vote_average, poster_path } = data;
  const [isVisible, setVisibility] = useState(false);

  return (
    <div className="MainCard" style={classStyleProp}>
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
  );
};

export default MainCard;
