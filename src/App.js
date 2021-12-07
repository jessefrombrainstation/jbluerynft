import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import spaceground from "./assets/images/spaceground-with-footer.png";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Board from "./components/Board/Board";
import Ether from "./components/Eth/Eth";

function App() {
  return (
    <Router>
      <Navigation />
      <Hero />
      <Board />
      <div className="App">
        <header className="spaceground"></header>
        <img src={spaceground} className="spaceground" alt="spaceground" />
      </div>
      <Ether />
    </Router>
  );
}

export default App;
