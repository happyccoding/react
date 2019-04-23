import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Age: <span>{this.props.age}</span>
          <span />
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {this.props.loading && (
          <img src={logo} alt="logo" className="App-logo" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "INCREMENT", value: 1 }),
    onAgeDown: () => dispatch({ type: "DECREMENT", value: 1 })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
