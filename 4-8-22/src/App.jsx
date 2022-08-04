import "./App.css";
import Pantone from "./components/Pantone/Pantone";
import ColorList from "./components/ColorList/ColorList";
import ColorCard from "./components/ColorCard/ColorCard";

const colors = ["#FF5733", "#1E8115", "#83AEF0"];
// function App() {
//   return (
//     <div>
//       <h1>Pantani</h1>
//       <Pantone color={colors} />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Pantani</h1>
//       <Pantone {...colors} />
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Pantone>
        <h1>Pantani</h1>
        <ColorList>
          <ColorCard color={colors[0]} />
          <ColorCard color={colors[1]} />
          <ColorCard color={colors[2]} />
        </ColorList>
      </Pantone>
    </div>
  );
}
export default App;
