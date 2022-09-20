import styles from "./App.module.scss";
import { createContext, useContext, useReducer } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { initialState } from "./utils/initialState";
import reducer from "./utils/reducer";
import Counter from "./components/Counter/Counter";
// import Input from "./components/Input/Input";
export const GeneralContext = createContext(initialState);

function App() {
  // const GeneralReceivedContext = useContext(GeneralContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GeneralContext.Provider value={{ state, dispatch }}>
      <div className={styles.App}>
        <Navbar />
        <Counter />
        <hr />
        {/* <Input /> */}
        <div className={styles.Inputc}>
          <input
            type="text"
            value={state.userName}
            onChange={(e) =>
              dispatch({ type: "SET_USERNAME", payload: e.target.value })
            }
            placeholder="Enter your Username"
          />
        </div>

        <Footer />
      </div>
    </GeneralContext.Provider>
  );
}

export default App;
