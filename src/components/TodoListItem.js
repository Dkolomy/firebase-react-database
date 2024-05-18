import React from "react";

const TodoListItem = (props) => {
  const todo = props.todo;
  const submit = () => props.deleteTodo(todo.id);

  return (
    <li key={todo.id}>
      <h3>{todo.name}</h3>
      <button onClick={submit}>delete</button>
    </li>
  );
};

export default TodoListItem;
