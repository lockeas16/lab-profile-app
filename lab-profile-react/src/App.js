import React, { Component } from "react";
import "./App.css";
import Router from "./Router";

class App extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div className="App">
        <section
          className="uk-section bgPrimary uk-flex uk-flex-middle"
          uk-height-viewport="expand: true"
        >
          <Router />
        </section>
      </div>
    );
  }
}

export default App;
