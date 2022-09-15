import {
  useParams,
  useLoaderData,
  Link,
  Outlet,
  NavLink,
} from "react-router-dom";
// import { ENDPOINTS } from "../../utils/endpoints";
// import { useFetch } from "../../utils/custom-fetch";

export const Recipe = (props) => {
  const { categoryName, recipeName, id } = useParams();
  // const { data, loading, error } = useFetch(`${ENDPOINTS.DETAIL}i?=${id}`);
  const data = useLoaderData();
  const recipe = data?.meals?.at(0) ?? null;
  const tabs = [
    { label: "Recipe", path: "./instructions" },
    { label: "Ingredients", path: "./ingredients" },
    { label: "YouTube", path: "./youtube" },
  ];

  if (!data) {
    return "Loading...";
  }

  return (
    <div className="Recipe">
      <img width={100} src={recipe.strMealThumb} alt={recipeName} />
      <div className="Text">
        <h3>
          <Link to={`/category/${categoryName}`} />
          {categoryName}
        </h3>
        <h2>{recipeName}</h2>
      </div>
      <div className="tabs">
        <ul className="nav nav-tabs">
          {tabs.map(({ label, path }) => (
            <li className="nav-item" key={path}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : "not-active"}`
                }
                to={path}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet context={recipe} />
      </div>
    </div>
  );
};
export default Recipe;
