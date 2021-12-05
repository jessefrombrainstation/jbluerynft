import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import spaceground from "./assets/images/spaceground.png";
import "./App.scss";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <header className="spaceground"></header>
        <img src={spaceground} className="spaceground" alt="spaceground" />
      </div>
    </Router>
  );
}

export default App;
