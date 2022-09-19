import { useState, useEffect, createContext } from "react";
import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import { GET } from "./utils/api";
import "./App.scss";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
import MainModal from "./components/MainModal/MainModal";
export const modalVisibility = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  const [movieID, setMovieID] = useState(Math.floor(Math.random() * 100000));
  const [movieData, setMovieData] = useState({});
  const [isVisible, setVisibility] = useState(false);

  useEffect(() => {
    GET("movie", movieID).then((data) => setMovieData(data));
  }, [movieID]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setMovieID(e.target.value);
  };

  return (
    <div className="App">
      <Navbar />
      <MainInput
        inputValue={inputValue}
        movieData={movieData}
        onHandleSubmit={onHandleSubmit}
        setInputValue={setInputValue}
      />
      <MainSection />
      <MovieEntity movieData={movieData} />
      <MainModal isVisible={isVisible} />
    </div>
  );
}

export default App;
