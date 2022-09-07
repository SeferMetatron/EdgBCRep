import MainCard from "../MainCard";
import { memo } from "react";
import styles from "./index.modules.scss";

const UpcomingList = ({ data }) => {
  return (
    <div className={styles.UpcomingList}>
      {data.map((item, index) => (
        <MainCard data={item} className={styles.upcoming} key={index} />
      ))}
    </div>
  );
};

export default memo(UpcomingList);
