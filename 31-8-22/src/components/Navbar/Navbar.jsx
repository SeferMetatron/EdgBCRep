import styles from "./index.scss";
import { memo, useContext } from "react";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <a href="#movie-entity">Random</a>
          <a href="#movie-entity"> About Us </a>
        </li>
      </ul>
    </div>
  );
};

export default memo(Navbar);
