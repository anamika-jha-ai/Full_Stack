import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDolist() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return;

    setTodos((prevtodos) => {
      return [...prevtodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

 let deleteTodo = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Add your task here"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={addNewTask}>Add Task</button>

      <h1>Tasks to do</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" /> {todo.task}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span><button onClick={() => deleteTodo(todo.id)}>Delete</button></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
