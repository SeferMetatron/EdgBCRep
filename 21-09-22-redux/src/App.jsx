import styles from "./App.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Counter from "./components/Counter/Counter";
import Modal from "./components/Modal/Modal";
import PlanetList from "./components/PlanetList/PlanetList";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const isModalVisble = useSelector((state) => state.isModalVisble);
  const modalData = useSelector((state) => state.modalData);

  return (
    <div className={styles.App}>
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
      <PlanetList />
      {isModalVisble && (
        <>
          <div
            onClick={() => dispatch({ type: "SET_MODAL_INVISIBLE" })}
            className={styles.overlay}
          ></div>
        </>
      )}
      <Modal data={modalData} />
    </div>
  );
}

export default App;
