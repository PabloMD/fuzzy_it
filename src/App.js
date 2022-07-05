import './App.css';
import Search from "./components/search";
import data from "./data/data.json"

function App() {
  return (
    <Search data={data} />
  );
}

export default App;
