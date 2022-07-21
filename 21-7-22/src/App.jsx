import { useState } from "react";
import Gallery from "./components/Gallery";
import Button from "./components/Button";
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/navbar";
import "./App.css";

function App() {
  const [isGalleryVisible, setGalleryVisibility] = useState(true);

  return (
    <div className="App">
      <Navbar displayBtn={setGalleryVisibility} switcharoo={isGalleryVisible} />
      <Hero />
      <Gallery visibility={isGalleryVisible} />
      <Button
        btnTextCont="show / hide"
        onHandleClick={() => setGalleryVisibility(!isGalleryVisible)}
      />
    </div>
  );
}

export default App;
