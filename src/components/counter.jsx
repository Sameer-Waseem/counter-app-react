import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.badgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.id)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            disabled={!this.props.value}
            onClick={() => this.props.onDecrement(this.props.id)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.id)}
            className="btn btn-danger btn-sm m-2"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  badgeClasses() {
    let classes = "badge m-2 bg-";
    return (classes += this.props.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    const { value } = this.props;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
