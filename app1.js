import React, { Component } from "react";
import CardData from "./data/db";
import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      CardData
    };
  }

  render() {
    return (
      <div>
        {this.state.CardData.map(cards => (
          <div className="card">
            <span>{cards.title}</span>
            <br />
            <span>{cards.subtitle}</span>
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default App;