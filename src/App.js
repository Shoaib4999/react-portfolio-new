import logo from './logo.svg';
import './App.css';
import Greetings from "./assets/components/body/greetings";

function App() {
  return (
    <div className="App">
      <Greetings username={"Shoaib Hassan"} password={"shoaib123"} />
        <Greetings username={"Hassan"} password={"xxyyzz"} />
        <Greetings username={"Hasnain"} />
        <Greetings username={"zohaib"} />
    </div>
  );
}

export default App;
