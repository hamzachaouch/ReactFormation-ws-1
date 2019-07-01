import React, { Component } from "react";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Action } from "../action";
import { dispatchAction } from "../dispatchAction";
import store from "../store";
class reduxComponenet extends Component {
  state = { count: store.getState().count };
  componentWillReceiveProps(nextprops) {
    console.log(nextprops);
    if (store.getState().count !== nextprops.composant.count)
      this.setState({ count: store.getState().count });
  }
  handleClick = () => {
    this.props.dispatchAction(Action.INCREMENT, 1);
    console.log(store.getState().count, " hello", this.state.count);
    this.setState({ count: store.getState().count });
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.state.count}
          </span>
        </a>
        <button onClick={this.handleClick}>click !</button>
      </nav>
    );
  }
}

/* Report.propTypes = {
  dispatchAction: PropTypes.func.isRequired
};
 */
//export default withStyles(styles)(Report);
const mapStateToProps = state => ({
  composant: state
});

export default connect(
  mapStateToProps,
  { dispatchAction }
)(reduxComponenet);
