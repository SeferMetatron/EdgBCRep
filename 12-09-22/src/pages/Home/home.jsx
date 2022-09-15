import { useLoaderData } from "react-router-dom";
import CategoryList from "../../components/CategoryList/CategoryList";

export const Home = () => {
  const data = useLoaderData();

  if (!data) {
    return "Loading...";
  }
  return (
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
