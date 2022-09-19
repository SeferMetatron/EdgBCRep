import MainCard from "../MainCard";
import { memo, useContext } from "react";
import styles from "./index.module.scss";

const TopRatedList = ({ data }) => {
  const { setVisibility } = useContext(modalVisibility);
  return (
    <div className={styles.TopRatedList}>
      {data.map((item, index) => (
        <MainCard data={item} className={styles.__toprated} key={index} />
      ))}
    </div>
  );
};

export default memo(TopRatedList);
