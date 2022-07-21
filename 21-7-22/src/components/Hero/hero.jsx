import "./hero.css";
import heroImage from "./ispazio-22.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={heroImage} alt="hero"></img>
    </div>
  );
};

export default Hero;
