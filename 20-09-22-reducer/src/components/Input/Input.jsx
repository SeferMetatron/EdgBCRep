import styles from "./index.module.scss";
import { useContext } from "react";
import { GeneralContext } from "../../App";
import reducer from "../../utils/reducer";

const Input = () => {
  const GeneralReceivedContext = useContext(GeneralContext);

  return (
    <div className={styles.Inputc}>
      <input
        type="text"
        value={state.userName}
        onChange={(e) =>
          dispatch({ type: "SET_USERNAME", payload: e.target.value })
        }
        placeholder="Put a name..."
      />
    </div>
  );
};

export default Input;
