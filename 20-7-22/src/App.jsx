import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/footer";
import Gallery from "./components/Gallery/gallery";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
