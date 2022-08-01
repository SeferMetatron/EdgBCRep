import data from "./assets/advice";
import { useState, useReducer } from "react";
import "./App.css";

function App() {
  const initialState = { count: 0 };
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "next":
        return { count: state.count + 1 };
      case "previous":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }
  let advice = data[state.count];

  return (
    <div className="main">
      <div className="card-container">
        <div className="card">
          <h3>{data[count].message}</h3>
          <p className="card-text">Post Number: #{data[count].id}</p>
        </div>
      </div>
      <div className="buttonz">
        <button
          disabled={count === 0}
          className="btn-previous"
          onClick={() => setCount(count - 1)}
        >
          Previous
        </button>
        <button
          disabled={count === 5}
          className="btn-next"
          onClick={() => setCount(count + 1)}
        >
          Next
        </button>

        <div className="second">
          <p className="reducer-id">{advice.id}</p>
          <p className="reducer-message">{advice.message}</p>
          <button
            className="btn-previous"
            disabled={state.count === 0}
            onClick={() => dispatch({ type: "previous" })}
          >
            Previous
          </button>
          <button
            className="btn-next"
            disabled={state.count === 5}
            onClick={() => dispatch({ type: "next" })}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
