import styles from "./index.module.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { href: "/", label: "Home", title: "Return Home" },
    { href: "/catalogue", label: "Catalogue", title: "Browse Catalogue" },
  ];

  return (
    <nav className={styles.Navbar}>
      <h3>Navbar</h3>
      <ul>
        {links.map(({ href, label, title }) => (
          <li key={href}>
            <NavLink
              to={href}
              title={title ? title : label}
              style={({ isActive }) => ({
                pointerEvents: isActive ? "none" : "auto",
                opacity: isActive ? 0.4 : 1,
              })}
              className={({ isActive }) =>
                isActive ? "nav nav--active" : "nav"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
