import React from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, content: "buy some milk" },
        { id: 2, content: "play mario kart" }
      ]
    };

    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  deleteTodo(id) {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  }

  addTodo(todo) {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
