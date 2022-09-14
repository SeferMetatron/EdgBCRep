import styles from "./index.module.scss";
import { Link, useOutletContext } from "react-router-dom";

const Ingredients = () => {
  const data = useOutletContext();
  return (
    <div className={styles.ingredients}>
      <ul>
        {data?.ingredients?.map((item, index) => (
          <li key={index}>
            {" "}
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
