import "./index.css";
import ColorList from "../ColorList/ColorList";
// const Pantone = ({ color }) => {
//   return (
//     <div className="main">
//       <ColorList colors={color} />
//     </div>
//   );
// };

// const Pantone = (pippo) => {
//   return (
//     <div className="main">
//       <ColorList {...pippo} />
//     </div>
//   );
// };

const Pantone = ({ children }) => {
  return <div className="main">{children}</div>;
};
export default Pantone;
