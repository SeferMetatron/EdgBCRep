import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <div className={styles.MainSection}>
      <Link
        to={"https://www.youtube.com/watch?v=O91DT1pR1ew&ab_channel=CB2C"}
        title="Surprise"
      >
        {" "}
        Click here!
      </Link>
    </div>
  );
};

export default MainSection;
