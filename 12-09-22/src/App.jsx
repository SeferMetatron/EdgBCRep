import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Category, ErrorPage, Recipe } from "./pages/index";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category/:categoryName" element={<Category />} />
        <Route
          path="/Category/:categoryName/new"
          element={<ErrorPage status={500} />}
        />
        <Route path="*" element={<ErrorPage name="Test" status={404} />} />
      </Routes>
      <MainSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
