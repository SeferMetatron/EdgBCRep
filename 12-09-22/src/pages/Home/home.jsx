import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      Home
      <br />
      <Link to="/Catalogue" title="Browse the Catalogue" aria-label="Catalogue">
        Browse Catalogue
      </Link>
      ;
    </div>
  );
};

export default Home;
