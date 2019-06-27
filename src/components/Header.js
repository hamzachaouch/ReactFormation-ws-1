import React, { Component } from "react";
//import Counter from "./counter";
class Header extends Component {
  state = {};

  render() {
    return (
      <span>
        {" "}
        <h3> {this.props.value}</h3>{" "}
      </span>
    );
  }
}

export default Header;
