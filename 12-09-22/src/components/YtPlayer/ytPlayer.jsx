import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

export const YtPlayer = (props) => {
  const recipe = useOutletContext();
  const { strYoutube } = recipe;
  const link = strYoutube?.replace?.(`/watch?v=`, `/embed/` ?? ``);

  return (
    <div className={styles.YtPlayer}>
      <h3>Showcase</h3>
      <iframe
        width="600"
        height="400"
        src={`${link}?ecver=1&amp;iv_load_policy=3&amp;rel=0&amp;showinfo=0&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560`}
        frameBorder="0"
        allow="autoplay; encrypted media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YtPlayer;
