import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  //constructor() {
  //  super();
  //  this.handleIncrements.bind(this);
  // }
  handleIncrements = () => {
    console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrements = () => {
    console.log("Increment Clicked", this);
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div styles={this.styles}>
        <button
          onClick={this.handleIncrements}
          style={this.styles}
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleDecrements}
          style={this.styles}
          className="btn btn-warning btn-sm"
        >
          Decrement
        </button>{" "}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
