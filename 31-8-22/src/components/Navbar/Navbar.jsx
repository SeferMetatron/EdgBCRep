import "./index.css";
import { memo } from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <a href="#movie-entity">Random</a>
          <a href="#movie-entity"> About Us </a>
        </li>
      </ul>
    </div>
  );
};

export default memo(Navbar);
