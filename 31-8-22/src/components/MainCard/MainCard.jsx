import "./index.css";

const MainCard = ({ data, classStyleProp }) => {
  const { title, vote_average, poster_path } = data;

  return (
    <div className="MainCard" style={classStyleProp}>
      {/* className={classStyleProp} */}
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
