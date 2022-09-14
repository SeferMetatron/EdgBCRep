import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Category, ErrorPage, Recipe } from "./pages/index";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import MainSection from "./components/MainSection/MainSection";
import Instructions from "./components/Instructions/Instructions";
import Ingredients from "./components/Ingredients/Ingredients";
import YtPlayer from "./components/YtPlayer/ytPlayer";
import { createContext, useState } from "react";

function App() {
  const [state, setState] = useState(0);
  return (
    <CounterContext.Provider value={{ state, setState }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<Home />} />
          <Route path="/Category/:categoryName" element={<Category />} />

          <Route path=":recipeName/:id" element={<Recipe />}>
            <Route path="" element={"You are viewing the recipe"} />
            <Route path="youtube" element={<YtPlayer />} />
          </Route>

          <Route
            path="/Category/:categoryName/new"
            element={<ErrorPage status={500} />}
          />
          <Route path="*" element={<ErrorPage name="Test" status={404} />} />
        </Routes>
        {/* <MainSection /> */}
        <Footer />
      </BrowserRouter>
    </CounterContext.Provider>
  );
}

export const CounterContext = createContext(0);
export default App;
