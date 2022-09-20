import styles from "./index.module.scss";
import { useContext } from "react";
import { GeneralContext } from "../../App";

const Footer = () => {
  const GeneralReceivedContext = useContext(GeneralContext);

  return (
    <div className={styles.Footer}>
      <h3> Number of piedini: {GeneralReceivedContext.state.count}</h3>
    </div>
  );
};

export default Footer;
