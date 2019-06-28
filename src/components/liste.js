import React, { Component } from "react";
import Counter from "./counter";

class liste extends Component {
  /*   state = {
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
  }; */

  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(item => (
          <Counter
            onDelete={this.props.onDelete}
            key={item.id}
            onIncrement={this.props.onIncrement}
            value={item.value}
            id={item.id}
          />
        ))}
      </div>
    );
  }
}

export default liste;
