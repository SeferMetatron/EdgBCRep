import CategoryListItem from "../CategoryListItem/CategoryListItem";
import styles from "./index.module.scss";

const CategoryList = (props) => {
  const { categories = [] } = props;
  return (
    <div className={styles.CategoryList}>
      <ul>
        {categories.map((category) => (
          <CategoryListItem key={category.idCategory} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
