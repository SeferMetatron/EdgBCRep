import styles from "./index.module.scss";
import { useContext } from "react";
import { GeneralContext } from "../../App";

const Navbar = () => {
  const GeneralReceivedContext = useContext(GeneralContext);

  return (
    <div className={styles.Navbar}>
      <h3>Username: {GeneralReceivedContext.state.userName}</h3>
    </div>
  );
};

export default Navbar;
