import "./index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src="https://picsum.photos/50/50" alt="logo" />
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
          <a href="/">FAQSs</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
