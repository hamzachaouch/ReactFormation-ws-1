import React, { Component } from "react";
import ReduxComponenet from "./reduxComponenet";
class Header extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totlaCounters}
          </span>
        </a>

        <ReduxComponenet />
      </nav>
    );
  }
}

/* const Header = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {this.props.totlaCounters}
        </span>
      </a>
    </nav>
  );
}; */

export default Header;
