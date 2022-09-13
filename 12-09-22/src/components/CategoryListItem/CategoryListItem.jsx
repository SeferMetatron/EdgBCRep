import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const CategoryListItem = (props) => {
  const { category } = props;

  return (
    <div className={styles.CategoryListItem}>
      <li className={styles.CatList}>
        <img
          className={styles.thumbnail}
          src={category.strCategoryThumb}
          alt={`Preview of ${category.strCategory} category`}
        />
        <div className={styles.Content}>
          <h3 className={styles.title}> {category.strCategory}</h3>
        </div>
        <Link
          to={`/Category/${category.strCategory}`}
          title={`Browse Catalogue ${category.strCategory}`}
          className={styles.Link}
        >
          {" "}
          {category.strCategory}
        </Link>
      </li>
    </div>
  );
};

export default CategoryListItem;
