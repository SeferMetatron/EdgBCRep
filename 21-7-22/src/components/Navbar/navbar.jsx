import "./navbar.css";
import Button from "../Button";
const Navbar = ({ displayBtn, switcharoo }) => {
  return (
    <div className="navbar">
      <h3>It's just a gallery, move along</h3>
      <Button
        btnTextCont={switcharoo ? "Hide Gallery" : "Show Gallery"}
        onHandleClick={() => displayBtn(!switcharoo)}
      />
    </div>
  );
};

export default Navbar;
