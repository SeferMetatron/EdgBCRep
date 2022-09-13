import { Link } from "react-router-dom";
import { ENDPOINTS } from "../../utils/endpoints";
import { useFetch } from "../../utils/custom-fetch";
import CategoryList from "../../components/CategoryList/CategoryList";

export const Home = () => {
  const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);

  if (loading) {
    return "Loading...";
  }
  return (
    // <div>
    //   Home
    //   <br />
    //   <Link to="/Category" title="Browse Categories" aria-label="Category">
    //     Browse Catalogue
    //   </Link>
    // </div>
    <div>
      <h3>Home</h3>
      {data ? (
        <CategoryList categories={data?.categories ?? []} />
      ) : (
        "Uh Oh Stinky"
      )}
    </div>
  );
};

export default Home;
