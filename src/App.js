import React from "react";
import "./App.css";
import Liste from "./components/liste";
import Navbar from "./components/Navbar";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Liste />
      </div>
    </React.Fragment>
  );
}

export default App;
