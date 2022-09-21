import "./index.css";
import { useSelector, useDispatch } from "react-redux";
// import { useReducer } from "react";

const Counter = () => {
  const store = useSelector((state) => state);
  const { count, user } = store;
  const dispatch = useDispatch();

  return (
    <div className="Counter">
      <h3> {user.userName}</h3>
      <h4> {count.value}</h4>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>;
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button
        onClick={() =>
          dispatch({ type: "SET_USERNAME", payload: "104Enjoyer" })
        }
      >
        Here you are!
      </button>
    </div>
  );
};

export default Counter;
