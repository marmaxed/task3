import "./App.css";
import Listing from "./components/Listing";
import { data } from "./data/data";

function App() {
  return <Listing items={data} />;
}

export default App;