import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

const YtPlayer = (props) => {
  const data = useOutletContext();
  const youtubeUrl = data?.video;
  const YTID = youtubeUrl?.split("?v=")[1];

  return (
    <div className={styles.YtPlayer}>
      <h3>Showcase</h3>
      <iframe
        width="600"
        height="400"
        src={`https://www.youtube.com/embed/${YTID}`}
        frameborder="0"
        allow="autoplay; encrypted media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YtPlayer;
