import "./index.css";

const ColorCard = ({ color }) => {
  return (
    <div className="card-element">
      <div className="palette" style={{ backgroundColor: color }}></div>
      <p className="colour-text" style={{ color: color }}>
        {color}
      </p>{" "}
    </div>
  );
};
export default ColorCard;
