import MainCard from "../MainCard";
import { memo, useContext } from "react";
import styles from "./index.modules.scss";

const UpcomingList = ({ data }) => {
  const { setVisibility } = useContext(modalVisibility);
  return (
    <div className={styles.UpcomingList}>
      {data.map((item, index) => (
        <MainCard data={item} className={styles.upcoming} key={index} />
      ))}
    </div>
  );
};

export default memo(UpcomingList);
