import "./style.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export const CounterContext = createContext(0);
export default App;
