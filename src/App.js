import logo from "./logo.svg";
import "./App.css";
import NaveBar from "./components/navbar";
import React from "react";
import Counters from "./components/counters";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <NaveBar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        ></NaveBar>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          ></Counters>
        </main>
      </React.Fragment>
    );
  }

  handleIncrement = (counterId) => {
    const counters = this.state.counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value++;
      }
      return counter;
    });
    this.setState({ counters });
  };

  handleDecrement = (counterId) => {
    const counters = this.state.counters.map((counter) => {
      if (counter.id === counterId) {
        if (counter.value > 0) counter.value--;
      }
      return counter;
    });
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };
}

export default App;
