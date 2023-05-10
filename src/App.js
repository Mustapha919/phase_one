import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";
import todosData from "./todosData";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleTodos = this.handleTodos.bind(this)
    }
    

    handleTodos(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos 
            }
        })
    }
    render() {
        const todos = todosData.map(todo => {
            return <TodoItem todo={todo} key={todo.id} handleTodos={this.handleTodos} />
        }) 
        return (
            <div className="todo-list">
                {todos}
            </div>
        );
    }
    
};

export default App;