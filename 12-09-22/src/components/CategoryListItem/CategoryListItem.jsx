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
        <div className={styles.content}>
          <h3 className={styles.title}> {category.strCategory}</h3>
          {/* <p className={styles.description}>{category.description}</p> */}
        </div>
        <Link
          to={`/Category/${category.strCategory}`}
          title={`Browse Catalogue ${category.strCategory}`}
          className={styles.link}
        >
          {" "}
          {category.strCategory}
        </Link>
      </li>
    </div>
  );
};

export default CategoryListItem;
