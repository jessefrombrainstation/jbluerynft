import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Lounge from "./components/Lounge/Lounge";
import ScrollToTop from "./components/Fx/ScrollToTop";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <MoralisProvider
    appId="HvJXM1kBE8FsYmf3I007HMj7pPXSfmtyKxbtUUyg"
    serverUrl="https://trkzv1wsjs3t.usemoralis.com:2053/server"
  >
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/space-bar-lounge" element={<Lounge />} />
      </Routes>
    </Router>
  </MoralisProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
