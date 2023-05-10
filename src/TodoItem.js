import React from "react";

const TodoItem = props => {
	let styles 
	if (props.todo.completed) {
		styles = {
			color: "green",
			textDecoration: "line-through"
		}
	}
	else {
		styles = {
			color : "red"
        }
    }
	return (
		<div className="todo-item">
			<input type="checkbox" checked={props.todo.completed}
				onChange={() => props.handleTodos(props.todo.id)} />
			<p style={styles}>{props.todo.text}</p>
		</div>
	);
};

export default TodoItem;