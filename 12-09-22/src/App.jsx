import styles from "./app.module.scss";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Catalogue, ErrorPage } from "./pages/index";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Catalogue" element={<Catalogue />} />
        <Route path="*" element={<ErrorPage name="Test" status={404} />} />
      </Routes>
      <MainSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
