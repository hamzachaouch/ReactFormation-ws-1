import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Liste from "./components/liste";
import Header from "./components/Header";
function App() {
  return (
    <div>
      <Header value={10} />
      <br />
      <Liste />
    </div>
  );
}

export default App;
