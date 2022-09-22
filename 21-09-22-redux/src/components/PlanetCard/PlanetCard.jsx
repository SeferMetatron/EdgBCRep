import styles from "./index.module.scss";
import { useSelector, useDispatch } from "react-redux";

const PlanetCard = ({ planetData }) => {
  const dispatch = useDispatch();
  const { name, terrain, population, climate, diameter } = planetData;
  const toggleModal = () => {
    dispatch({ type: "SET_MODAL_VISIBLE" });
    dispatch({ type: "SET_MODAL_DATA", payload: planetData });
  };

  return (
    <div className={styles.PlanetCard} onClick={toggleModal}>
      <h3>{name}</h3>
      <p>{terrain}</p>
      <p>{population}</p>
      <p>{climate}</p>
      <p>{diameter}</p>
    </div>
  );
};

export default PlanetCard;
