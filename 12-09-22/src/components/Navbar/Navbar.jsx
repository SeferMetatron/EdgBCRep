import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [{ href: "/", label: "Home", title: "Return Home" }];

  return (
    <nav className={styles.Navbar}>
      <h3>Navbar</h3>
      <ul>
        {links.map(({ href, label, title }) => (
          <li key={href}>
            <NavLink
              end
              to={href}
              title={title ? title : label}
              style={({ isActive, isPending }) => {
                return {
                  color: isPending ? "red" : "currentColor",
                  pointerEvents: isActive || isPending ? "none" : "auto",
                  opacity: isActive ? 0.4 : 1,
                };
              }}
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
