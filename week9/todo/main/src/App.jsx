import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Go to gym",
      description: "Go to gym at 9",
    },
    {
      id: 2,
      title: "Go to park",
      description: "Go to park at 8",
    },
    {
      id: 3,
      title: "Go to mall",
      description: "Go to mall at 10",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: `Todo ${todos.length + 1}`,
        description: `Description ${todos.length + 1}`,
      },
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
