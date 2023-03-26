import { Card } from "./components/Card/input";
import { Header } from "./components/Header";
import salada from "./assets/meals/salada.svg";

function App() {
  return <Card image={salada} title={"Salada Ravanello"} value={"49,97"} />;
}

export default App;
