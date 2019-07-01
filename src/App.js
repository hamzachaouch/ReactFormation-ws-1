import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Liste from "./components/liste";
import Navbar from "./components/Navbar";
class App extends Component {
  state = {
    counters: [
      { id: 1, value: 100 },
      { id: 2, value: 50000 },
      { id: 3, value: 0 },
      { id: 4, value: 50 },
      { id: 5, value: 1003 }
    ]
  };

  handleIncrement = idcounter => {
    // console.log(idcounter);
    const counters = [...this.state.counters];
    counters[idcounter - 1].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(i => {
      i.value = 0;
      return i;
    });
    this.setState({
      counters
    });
  };
  handleDelete = counterId => {
    //console.log("event handler", counterId);
    const counters = this.state.counters.filter(item => item.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    console.log(store.getState(), " hamza");
    return (
      <Provider store={store}>
        <Navbar
          totlaCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <div className="container">
          <Liste
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />
        </div>
      </Provider>
    );
  }
}
export default App;
