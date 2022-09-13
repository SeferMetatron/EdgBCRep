import { Link, useParams } from "react-router-dom";
import { ENDPOINTS } from "../../utils/endpoints";
import { useFetch } from "../../utils/custom-fetch";
import MealList from "../../components/MealList/MealList";

export const Category = () => {
  const params = useParams();
  const { categoryName } = params;
  const { data, loading, error } = useFetch(
    `${ENDPOINTS.FILTER}?c=${categoryName}`
  );

  if (loading) {
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
