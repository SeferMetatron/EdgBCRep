import styles from "./index.module.scss";
import { Fragment } from "react";
import { useOutletContext, useLoaderData } from "react-router-dom";

export const Ingredients = () => {
  const recipe = useOutletContext() ?? {};
  const indexes = Array.from({ length: 20 }, (_, i) => i + 1);
  // const data = useLoaderData();

  return (
    <div className={styles.ingredients}>
      {" "}
      <ul>
        {!!recipe &&
          indexes.map((index) => (
            <Fragment key={index}>
              {recipe[`strIngredient${index}`]?.length ? (
                <li>
                  {recipe[`strIngredient${index}`]}:
                  {recipe[`strMeasure${index}`]}
                </li>
              ) : null}
            </Fragment>
          ))}
      </ul>
    </div>
  );
};

export default Ingredients;
