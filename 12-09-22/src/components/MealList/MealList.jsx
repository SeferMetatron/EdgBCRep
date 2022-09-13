import styles from "./index.module.scss";
import MealListItem from "../MealListItem/MealListItem";

const MealList = (props) => {
  const { meals = [], categoryName = "" } = props;

  return (
    <div className={styles.MealList}>
      <ul>
        {meals.map((meal) => (
          <MealListItem
            key={meal.idMeal}
            meal={meal}
            categoryName={categoryName}
          />
        ))}
      </ul>
    </div>
  );
};

export default MealList;
