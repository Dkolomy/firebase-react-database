import { useState, useEffect } from "react";
import { findAll, create, del } from "../services/todo.mjs";
import AddTodoBar from "./AddTodoBar";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const res = await findAll();
    setTodos([...res]);
    setLoading(false);
  };

  const createTodo = async (args) => {
    const res = await create(args);
    setTodos([
      ...todos,
      {
        id: res.id,
        ...args,
      },
    ]);
  };

  const deleteTodo = async (id) => {
    await del(id);
    setTodos([...todos.filter(todo => todo.id !== id)]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section>
      <header>
        <h2>TODO</h2>
      </header>

      <AddTodoBar createTodo={createTodo} />

      {loading && <p>loading...</p>}
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => (
            <TodoListItem todo={todo} deleteTodo={deleteTodo} />
          ))}
      </ul>
    </section>
  );
};

export default TodoList;
