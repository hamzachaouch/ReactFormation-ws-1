import React, { Component } from "react";
import { Button } from "reactstrap";

class counter extends Component {
  /*  state = {
    count: this.props.value
  };*/
  /*  handleClick = () => {
   this.setState({ count: this.pro.count + 1 });
*/
  //   this.setState({ count: this.state.count + 1 });
  //this.state.count++;

  returnFormat = () => {
    var { value } = this.props;
    return value === 0 ? <span>Zero</span> : <span>value</span>;
  };

  render() {
    var { value } = this.props;
    return (
      <div>
        {value === 0 ? (
          <span className="badge badge-primary m-2">
            <h4>Zero</h4>
          </span>
        ) : (
          <span className="badge badge-warning m-2">
            {" "}
            <h4>{value}</h4>
          </span>
        )}
        <Button
          onClick={() =>
            //    this.handleClick();
            this.props.onIncrement(this.props.id)
          }
        >
          increment
        </Button>
        <Button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
        </Button>
      </div>
    );
  }
}
export default counter;
