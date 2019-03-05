import React, { Component } from "react";
import Footer from "./Footer";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

// const todos = [
//   {
//     id: 1,
//     text: "学习react",
//     completed: true
//   },
//   {
//     id: 2,
//     text: "学习redux",
//     completed: false
//   },
//   {
//     id: 3,
//     text: "学习react router",
//     completed: false
//   }
// ];
// const filter = "all";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filter: "all"
    };
  }
  getVisibleTodos = () => {
    const currentFilter = this.state.filter;
    return this.state.todos.filter(i => {
      if (currentFilter === "active") {
        return !i.completed;
      } else if (currentFilter === "completed") {
        return i.completed;
      } else {
        return true;
      }
    });
  };
  render() {
    const { filter } = this.props;
    const todos = this.getVisibleTodos();
    return (
      <div>
        <AddTodo />
        <TodoList todos={todos} />
        <Footer filter={filter} />
      </div>
    );
  }
}

export default App;
