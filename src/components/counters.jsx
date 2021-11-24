import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;

    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            value={counter.value}
          ></Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
