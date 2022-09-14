import { useParams, Outlet, NavLink } from "react-router-dom";
import { ENDPOINTS } from "../../utils/endpoints";
import { useFetch } from "../../utils/custom-fetch";

const formatRecipe = () => {
  const iniReci = data.meals?.at[0] ?? {};
  const ingredients = [];
  for (let i = 1; 1 <= 20; i++) {
    const name = iniReci[`strIngredient${i}`];
    const value = iniReci[`strMeasures${i}`];

    if (!name?.length) {
      continue;
    }
    ingredients.push({ name, value });
  }

  return {
    name: iniReci.strMeal,
    id: iniReci.idMeal,
    youTubeUrl: iniReci.strYoutube,
    thumbnailSrc: iniReci.strMealThumb,
    tags: iniReci.strTags,
    instructions: iniReci.strInstructions,
    ingredients,
  };
};

export const Recipe = () => {
  const tab = [
    {
      name: "Ingredient",
      path: "/ingredients",
    },
    {
      name: "Instructions",
      path: "/instructions",
    },
    {
      name: "Video",
      path: "/video",
    },
  ];
  const { categoryName, recipeName, id } = useParams();
  const { data, loading, error } = useFetch(
    `${ENDPOINTS.DETAIL}?i=${id}`,
    formatRecipe
  );

  if (!data) {
    return "Loading...";
  }

  return (
    <div>
      <h3>
        {categoryName} {recipeName}
      </h3>
      <div className={styles.cardContainer}>
        <div className={styles.container}>
          <nav className={styles.tab}>
            {tab.map((item, i) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${styles.link} ${styles.link_active}`
                    : styles.link
                }
                to={`.${item.path}`}
                key={i}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          <Outlet context={data} />

          {/* {tab === 'youtube' && <p>{data.youtubeUrl}</p>}
      {tab === 'instructions' && <p>{data.instructions}</p>} */}
        </div>
      </div>
    </div>
  );
};
export default Recipe;
