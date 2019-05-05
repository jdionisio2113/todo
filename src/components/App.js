import React from "react";
import Todos from "./Todos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: "buy some milk" },
        { id: 2, content: "play mario kart" }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
