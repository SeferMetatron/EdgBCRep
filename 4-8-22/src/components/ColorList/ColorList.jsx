import "./index.css";
import ColorCard from "../ColorCard/ColorCard";

// const ColorList = ({ colors }) => {
//   return (
//     <div className="color-list">
//       {colors.map((col, id) => (
//         <ColorCard color={col} key={id} />
//       ))}
//     </div>
//   );
// };

// const ColorList = (pippo) => {
//   return (
//     <div className="color-list">
//       {Object.values(pippo)((col, id) => (
//         <ColorCard color={col} key={id} />
//       ))}
//     </div>
//   );
// };

const ColorList = ({ children }) => {
  return <div className="color-list">{children}</div>;
};
export default ColorList;
