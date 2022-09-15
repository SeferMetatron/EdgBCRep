import { useLoaderData, useParams } from "react-router-dom";
import MealList from "../../components/MealList/MealList";

export const Category = () => {
  const { categoryName } = useParams();
  const data = useLoaderData();

  if (!data) {
    return "Loading...";
  }
  if (!data?.meals?.length) {
    return "Uh Oh Stinky";
  }

  return (
    <div>
      <MealList categoryName={categoryName} meals={data?.meals} />
    </div>
  );
};

export default Category;
