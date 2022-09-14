import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const MealListItem = (props) => {
  const { meal = {}, categoryName = "" } = props;

  return (
    <div className={styles.MealListItem}>
      <li className={styles.ListedItem}>
        <img
          className={styles.thumbnail}
          src={meal.strMealThumb}
          alt={`Preview of ${meal.strCategory} recipe`}
        />
        <div className={styles.content}>
          <h3 className={styles.title}>{meal.strMeal}</h3>
        </div>
        <Link
          to={`/Category/${categoryName}/${meal.strMeal}/${meal.idMeal}`}
          title={`Browse Catalogue ${meal.strMeal}`}
          className={styles.link}
        >
          {meal.strMeal}
        </Link>
        ;
      </li>
    </div>
  );
};

export default MealListItem;
