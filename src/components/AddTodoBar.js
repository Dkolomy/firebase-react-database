import { useState } from "react";

const AddTodoBar = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => setNewTodo(e.target.value);

  const submit = () => {
    props.createTodo({ name: newTodo });
    setNewTodo("");
  };

  return (
    <div>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button onClick={submit}>Add todo</button>
    </div>
  );
};

export default AddTodoBar;
