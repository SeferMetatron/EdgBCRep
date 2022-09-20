import styles from "./index.module.scss";
import { useContext } from "react";
import { GeneralContext } from "../../App";
import Button from "../Button/Button";
import { reducer } from "../../utils/reducer";

const Counter = () => {
  const GeneralReceivedContext = useContext(GeneralContext);

  return (
    <div className={styles.Counter}>
      <h4>Can we pretend that airplanes are like</h4>
      <p>Shooting stars: {GeneralReceivedContext.state.count}</p>
      {/* <Button
        props={"+"}
        onClick={() => GeneralReceivedContext.dispatch({ type: "INCREMENT" })}
      />
      <Button
        props={"-"}
        onClick={() => GeneralReceivedContext.dispatch({ type: "DECREMENT" })}
      />
      <Button
        props={"Reset"}
        onClick={() => GeneralReceivedContext.dispatch({ type: "RESET" })}
      />
      <Button
        props={"Random"}
        onClick={() => GeneralReceivedContext.dispatch({ type: "RANDOM" })}
      /> */}
      <button
        onClick={() => GeneralReceivedContext.dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
      <button
        onClick={() => GeneralReceivedContext.dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        onClick={() => GeneralReceivedContext.dispatch({ type: "RESET" })}
      >
        Reset
      </button>
      <button
        onClick={() => GeneralReceivedContext.dispatch({ type: "RANDOM" })}
      >
        Random
      </button>
    </div>
  );
};

export default Counter;
