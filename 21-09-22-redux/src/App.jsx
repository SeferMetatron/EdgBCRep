import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Counter from "./components/Counter/Counter";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [username, setUsername] = useState();

  return (
    <div className="App">
      <Counter />
      <label htmlFor="Username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        onClick={() => dispatch({ type: "SET_USERNAME", payload: username })}
      >
        Change {state.user.userName}
      </button>
    </div>
  );
}

export default App;
