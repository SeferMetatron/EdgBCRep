import styles from "./index.module.scss";
import { memo } from "react";

const MovieEntity = ({ movieData }) => {
  const { poster_path, original_title, genres, vote_average, tagline, title } =
    movieData;

  return (
    <div className={styles.MovieEntity}>
      <div className={styles.info}>
        <div className={styles.title}>
          <p>title</p>
          <h1>{title}</h1>
        </div>
        <div className={styles.bottom}>
          <p>rating</p>
          <p>{vote_average || "not found"}</p>
          <p>genre</p>
          <ul>
            {genres &&
              genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <p className={styles.tagline}>{tagline}</p>
        </div>
      </div>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={original_title}
      />
      <div className={styles.book}>
        <button className={styles.btn}>Book it!</button>
      </div>
    </div>
  );
};

export default memo(MovieEntity);
