import "./index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contacts</a>
        </li>
        <li>
          <a href="/">Maps</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
